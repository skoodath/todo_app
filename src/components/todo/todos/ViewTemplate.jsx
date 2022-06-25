import React, { useContext } from "react";
import TodoContext from "../../context/TodoContext";

const ViewTemplate = ({todo, handleFormEdit }) => {
  
  const { handleDelete, handleToggle} = useContext(TodoContext);
  
  return (
    <div className='todo__view_container'>
      <label className="todo__status">
        <input type="checkbox" name="todostatus" className='todo__check' onChange={() => handleToggle(todo.id)} />
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
          onClick={() => handleDelete(todo.id)}
          >Delete</button>
      </div>
    </div>
  )
}

export default ViewTemplate;