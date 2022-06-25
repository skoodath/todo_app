export const newText = text => ({
  type: "TODO_TEXT",
  payload: text
})

export const addTodo = todo => ({
  type: "ADD_TODO",
  payload: todo
})

export const editTodo = (id, text) => ({
  type: "EDIT_TODO",
  payload: {id, text}
})

export const deleteTodo = todoId => ({
  type: "DELETE_TODO",
  payload: todoId
})

export const toggleTodo = todoId => ({
  type: "TOGGLE_TODO",
  payload: todoId
})