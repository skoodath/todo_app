import React, { useEffect, useReducer, useState } from 'react';
import { Header, NewTodo, Filter, Todo } from './components';
import { initialState, reducer } from './components/reducer/reducer';
import TodoContext from './components/context/TodoContext';
import { deleteTodo, editTodo, toggleTodo } from './components/action/actions';
import Empty from './components/todo/misc/Empty';

const App = () => {
  const [{todoText, todos}, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  const [toggleMenu, setToggleMenu] = useState(false);

  const handleMenu = () => {
    setToggleMenu(!toggleMenu);
  }
  const handleEdit = (todoId, newText) => {
    dispatch(editTodo(todoId, newText))
  }

  const handleDelete = (todoId) => {
    dispatch(deleteTodo(todoId))
  }

  const handleToggle = (todoId) => {
    dispatch(toggleTodo(todoId))
  }

  return (
    <>
      <TodoContext.Provider 
        value={{
          todoText, 
          dispatch, 
          handleDelete, 
          handleEdit,
          handleToggle

        }}>
        <Header handleMenu={handleMenu} />
        <NewTodo />
        <Filter />
          {todos.length === 0 && <Empty />}
          {todos.map(todo => (
            <Todo todo={todo} key={todo.id} />
          ))}
      </TodoContext.Provider>
    </>
  )
}

export default App;