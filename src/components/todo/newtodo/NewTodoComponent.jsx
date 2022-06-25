import React, { useContext } from 'react';
import { addTodo, newText } from '../../action/actions';
import TodoContext from '../../context/TodoContext';
import { nanoid } from 'nanoid';
import "./newtodo.scss"

const NewTodoComponent = () => {

  const {todoText, dispatch} = useContext(TodoContext);

  const handleChange = (e) => {
    dispatch(newText(e.target.value))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: nanoid(),
      title: todoText,
      done: false
    }
    if(todoText) dispatch(addTodo(newTodo))
    dispatch(newText(""))
  }

  return (
    <form className='newtodo__form' onSubmit={handleSubmit}>
      <div className='newtodo__wrapper'>
        <input 
          type="text" 
          className='newtodo__input'
          placeholder='add a task...'
          value={todoText}
          onChange={handleChange}
        />
        <button type="submit" className={!todoText ? 'newtodo__button_disabled': 'newtodo__button'} disabled={!todoText}>Add</button>
      </div>
    </form>
  )
}

export default NewTodoComponent;