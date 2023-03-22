import React, { useState } from "react";
import TodoForm from "./components/Todo/TodoForm";
import TodoList from "./components/Todo/TodoList";

function App() {
  const [todoList, setTodoList] = useState([]);

  const addTodoHandler = (todo) => {
    setTodoList(prevList => {
      return [...prevList, { id: Math.floor(Math.random() * 100) , text: todo }];
    });
    // console.log(todoList);
  };

  return (
    <div>
      <TodoForm onSubmit={addTodoHandler} />
      <TodoList list={todoList} />
    </div>
  );
}

export default App;
