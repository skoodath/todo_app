
export interface Todo {
  id: string;
  title: string;
  done: boolean
}

export interface AppState {
  todos: Todo[];
  filterTodos: string;
}

export type Action = 
| { type: "ADD_TODO",  payload: Todo }
| { type: "EDIT_TODO", payload: {id: string, text: string} }
| { type: "DELETE_TODO", payload: string }
| { type: "TOGGLE_TODO", payload: string }
| { type: "FILTER_TODO", payload: string }