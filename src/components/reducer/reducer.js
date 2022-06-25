const getTodos = () => {
  return localStorage.getItem("todos") === null
  ? []
  :
  JSON.parse(localStorage.getItem("todos"))
  }

export const initialState = {
  todoText: "",
  todos: getTodos()
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "TODO_TEXT":
      return {
        ...state,
        todoText: action.payload
      }
    case "ADD_TODO":
      return {
        ...state,
        todos: [
          action.payload,
          ...state.todos
        ]
      }
    case "EDIT_TODO":
      return {
        ...state,
        todos: state.todos.map(todo => {
          return todo.id === action.payload.id ? {...todo, title: action.payload.text } : {...todo}
      })
    }
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      }
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map(todo => {
          return todo.id === action.payload ? {...todo, done: !todo.done} : {...todo}
        })
      }
    default:
      return state;
  }
}