import React, { useContext, useEffect, useState } from 'react';
import { Header, NewTodo, Filter, Todo } from './components';
import { deleteTodo, editTodo, toggleTodo } from './components/action/actions';
import { TodoContext } from './components/context/TodoContext';
import Empty from './components/todo/misc/Empty';

const App = () => {

  const {state, dispatch} = useContext(TodoContext)

  const {todos} = state;

  useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  const [toggleMenu, setToggleMenu] = useState(false);

  const handleMenu = () => {
    setToggleMenu(!toggleMenu);
  }
  const handleEdit = (id: string, text: string) => {
    dispatch(editTodo(id, text))
  }

  const handleDelete = (id: string) => {
    dispatch(deleteTodo(id))
  }

  const handleToggle = (id: string) => {
    dispatch(toggleTodo(id))
  }

  return (
    <>
        <Header handleMenu={handleMenu} />
        <NewTodo />
        <Filter />
          {todos.length === 0 && <Empty />}
          {todos.map(todo => (
            <Todo 
              todo={todo} 
              key={todo.id} 
              handleEdit={handleEdit}
              handleDelete={handleDelete}
              handleToggle={handleToggle}
            />
          ))}
    </>
  )
}

export default App;