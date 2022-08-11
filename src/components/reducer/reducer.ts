import { Action, AppState, Todo } from "../../declarations"


const getTodos = (): Todo[] | [] => {
  return localStorage.getItem("todos") === null
  ? []
  :
  JSON.parse(localStorage.getItem("todos") || "")
  }

export const initialState: AppState = {
  todos: getTodos(),
  filterTodos: "All"
}

export const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
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