import React, { useContext, useEffect, useState } from "react";
import { Header, NewTodo, Sidebar, Todo } from "./components";
import { deleteTodo, editTodo, toggleTodo } from "./components/action/actions";
import { TodoContext } from "./components/context/TodoContext";
import Empty from "./components/todo/misc/Empty";
import "./app.scss";

const App = () => {
  const { state, dispatch } = useContext(TodoContext);

  const { todos, filterTodos } = state;

  const [toggleMenu, setToggleMenu] = useState(true);

  const filteredList = (filterVal: string) => {
    return todos.filter((todo) => {
      switch (filterVal) {
        case "Pending":
          return !todo.done;
        case "Complete":
          return todo.done;
        default:
          return true;
      }
    });
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleMenu = () => {
    setToggleMenu(!toggleMenu);
  };
  const handleEdit = (id: string, text: string) => {
    dispatch(editTodo(id, text));
  };

  const handleDelete = (id: string) => {
    dispatch(deleteTodo(id));
  };

  const handleToggle = (id: string) => {
    dispatch(toggleTodo(id));
  };

  return (
    <>
      <Header handleMenu={handleMenu} />
      <section className="main__container">
        <Sidebar toggleMenu={toggleMenu} setToggeMenu={setToggleMenu} />
        <section className="body__container">
          <NewTodo />
          {todos.length === 0 && <Empty />}
          <ul style={{ margin: "3rem 0 0 0" }}>
            {filteredList(filterTodos).map((todo) => (
              <Todo
                todo={todo}
                key={todo.id}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
                handleToggle={handleToggle}
              />
            ))}
          </ul>
        </section>
      </section>
    </>
  );
};

export default App;
