import React, { useState } from 'react';
import ViewTemplate from "./ViewTemplate";
import EditTemplate from './EditTemplate';
import "./todos.scss";
import { Todo } from '../../../declarations';

interface TodoProps {
  todo: Todo;
  handleEdit: (id: string, text: string) => void
  handleDelete: (id: string) => void
  handleToggle: (id: string) => void
}

const TodoComponent = ({todo, handleEdit, handleDelete, handleToggle}: TodoProps) => {
  
  const [isEditing, setIsEditing] = useState(false);
  const [updatedText, setUpdatedText] = useState("");

  const handleFormEdit = () => {
    setIsEditing(!isEditing)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUpdatedText(event.target.value)
  }

  const handleSubmit = (id: string, e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleEdit(id, updatedText)
    setUpdatedText("")
    setIsEditing(false)
  }

  return (
    <li className='todo__wrapper'>
      {isEditing ? <EditTemplate 
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(todo.id, e)}
        onDelete={() => handleDelete(todo.id)}
        todo={todo} 
        updatedText={updatedText}
        handleFormEdit={handleFormEdit}
        /> 
      : 
      <ViewTemplate 
        handleFormEdit={handleFormEdit}
        onDelete={() => handleDelete(todo.id)}
        onToggle={() => handleToggle(todo.id)}
        todo={todo}
        /> 
      }
    </li>
  )
}

export default TodoComponent;