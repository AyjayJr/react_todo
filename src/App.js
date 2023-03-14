import React from "react";
import TodoForm from "./components/Todo/TodoForm";

function App() {

  const addTodoHandler = (todo) => {
    console.log(todo);
  };

  return (
    <div>
      <TodoForm onSubmit={addTodoHandler} />
    </div>
  );
}

export default App;
