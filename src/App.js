import React, { useState } from "react";
import TodoForm from "./components/Todo/TodoForm";
import TodoList from "./components/Todo/TodoList";

function App() {
  const [todoList, setTodoList] = useState([]);

  const addTodoHandler = (todo) => {
    // TODO: make ids perfectly unique
    setTodoList(prevList => {
      return [...prevList, { id: Math.floor(Math.random() * 100) , text: todo }];
    });
    // console.log(todoList);
  };

  const removeTodoHandler = (id) => {
    setTodoList(prevList => {
      return prevList.filter(item => item.id !== id);
    })
  };

  return (
    <div>
      <TodoForm onSubmit={addTodoHandler} />
      <TodoList list={todoList} onDelete={removeTodoHandler} />
    </div>
  );
}

export default App;
