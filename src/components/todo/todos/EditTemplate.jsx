import React, { useContext } from "react";
import TodoContext from "../../context/TodoContext";

const EditTemplate = ({changeFn, submitFn, todo, updatedText, handleFormEdit}) => {
  
  const { handleDelete} = useContext(TodoContext);
  
  return (

  <form className='todo__edit_form' onSubmit={(e) => submitFn(e, todo.id)}>
    <input 
      type="text" 
      value={updatedText}
      className="todo__edit_input" 
      placeholder={todo.title}
      onChange={changeFn}
    />
    <div className="todo__edit_buttons">
      <button className="todo__button_common todo__save">Save</button>
      <button className="todo__button_common todo__cancel" onClick={handleFormEdit}>cancel</button>
      <button className="todo__button_common todo__delete" onClick={() => handleDelete(todo.id)}>Delete</button>
    </div>
  </form>
  )
}

export default EditTemplate;