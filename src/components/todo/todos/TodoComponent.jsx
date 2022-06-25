import React, { useContext, useState } from 'react';
import TodoContext from '../../context/TodoContext';
import ViewTemplate from "./ViewTemplate";
import EditTemplate from './EditTemplate';
import "./todos.scss";

const TodoComponent = ({todo}) => {
  
  const {handleEdit} = useContext(TodoContext);
  
  const [isEditing, setIsEditing] = useState(false);
  const [updatedText, setUpdatedText] = useState("");


  const handleFormEdit = () => {
    setIsEditing(!isEditing)
  }

  const handleChange = ({target}) => {
    setUpdatedText(target.value)
  }

  const handleSubmit = (e, todoId) => {
    e.preventDefault();
    handleEdit(todoId, updatedText)
    setUpdatedText("")
    setIsEditing(false)
  }


  return (
    <li className='todo__wrapper'>
      {isEditing ? <EditTemplate 
        changeFn={handleChange}
        submitFn={handleSubmit} 
        todo={todo} 
        updatedText={updatedText}
        handleFormEdit={handleFormEdit}
        /> 
      : 
      <ViewTemplate 
        handleFormEdit={handleFormEdit}
        todo={todo}
        /> 
      }
    </li>
  )
}

export default TodoComponent;