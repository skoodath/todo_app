import React from "react";
import { Todo } from "../../../declarations";

interface EditProps {
  todo: Todo; 
  updatedText: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleFormEdit: () => void;
  onDelete: () => void;
}

const EditTemplate = ({todo, onChange, onSubmit, updatedText, handleFormEdit, onDelete}: EditProps) => {

  return (

  <form className='todo__edit_form' onSubmit={onSubmit}>
    <input 
      type="text" 
      value={updatedText}
      className="todo__edit_input" 
      placeholder={todo.title}
      onChange={onChange}
    />
    <div className="todo__edit_buttons">
      <button className="todo__button_common todo__save">Save</button>
      <button className="todo__button_common todo__cancel" onClick={handleFormEdit}>cancel</button>
      <button className="todo__button_common todo__delete" onClick={onDelete}>Delete</button>
    </div>
  </form>
  )
}

export default EditTemplate;