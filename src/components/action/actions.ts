import { Action, Todo } from "../../declarations"


export const addTodo = (todo: Todo): Action => ({
  type: "ADD_TODO",
  payload: todo
})

export const editTodo = (id: string, text: string): Action => ({
  type: "EDIT_TODO",
  payload: {id, text}
})

export const deleteTodo = (todoId: string): Action => ({
  type: "DELETE_TODO",
  payload: todoId
})

export const toggleTodo = (todoId: string): Action => ({
  type: "TOGGLE_TODO",
  payload: todoId
})

export const filterTodo = (status: string): Action => ({
  type: "FILTER_TODO",
  payload: status
})