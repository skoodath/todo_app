import React from "react";
import { Todo } from "../../../declarations";

interface ViewProps {
  todo: Todo;
  handleFormEdit: () => void 
  onDelete: () => void
  onToggle: () => void
}

const ViewTemplate = ({todo, handleFormEdit, onDelete, onToggle }: ViewProps) => {
  
  
  return (
    <div className='todo__view_container'>
      <label className="todo__status">
        <input type="checkbox" name="todostatus" className='todo__check' onChange={onToggle} />
        <div className="todo__done_icon"></div>
      </label>
      <p className={todo.done ? 'todo__text_done': 'todo__text'}>{todo.title}</p>
      <div className="todo__view_buttons">
        {!todo.done && <button 
          className="todo__button_common todo__edit" 
          onClick={handleFormEdit}
          >
            Edit
          </button>}
        <button 
          className="todo__button_common todo__delete"
          onClick={onDelete}
          >Delete</button>
      </div>
    </div>
  )
}

export default ViewTemplate;