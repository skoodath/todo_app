import React, { useContext, useRef } from 'react';
import { addTodo } from '../../action/actions';
import {TodoContext} from '../../context/TodoContext';
import { nanoid } from 'nanoid';
import "./newtodo.scss"

const NewTodoComponent = () => {

  const {dispatch} = useContext(TodoContext);

  let todoRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let todoText = todoRef.current!.value;
    if(!todoText) return;
    const newTodo = {
      id: nanoid(),
      title: todoText,
      done: false
    }
    if(todoText) dispatch(addTodo(newTodo));
    todoRef.current!.value = "";
  }

  return (
    <form className='newtodo__form' onSubmit ={handleSubmit}>
      <div className='newtodo__wrapper'>
        <input 
          type="text" 
          className='newtodo__input'
          placeholder='add a task...'
          ref={todoRef}
        />
        <button type="submit" className='newtodo__button'>Add</button>
      </div>
    </form>
  )
}

export default NewTodoComponent;