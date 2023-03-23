import React, { useReducer } from "react";
import TodoForm from "./components/Todo/TodoForm";
import TodoList from "./components/Todo/TodoList";

const reducer = (state, action) => {
  if (action.type === 'ADD') {
    return [...state, {id: Math.random() * 100, text: action.val, complete: false}] 
  }

  if (action.type === 'REMOVE') {
    return state.filter(todo => todo.id !== action.id)
  }

  if (action.type === 'COMPLETE') {
    return state.map((todo) => {
      if (todo.id === action.id) {
        return {...todo, complete: !todo.complete};
      }
      else {
        return todo;
      }
    })
  }
  return state;
};


function App() {
  const [todoList, dispatchTodo] = useReducer(reducer, []);

  const addTodoHandler = (todo) => {
    dispatchTodo({type: 'ADD', val: todo})
  };

  const removeTodoHandler = (val) => {
    dispatchTodo({type: 'REMOVE', id: val})
  }

  const toggleCompleteHandler = (val) => {
    dispatchTodo({type: 'COMPLETE', id: val})
    console.log(todoList);
  };

  return (
    <div>
      <TodoForm onSubmit={addTodoHandler} />
      <TodoList
        list={todoList}
        onDelete={removeTodoHandler}
        onComplete={toggleCompleteHandler}
      />
    </div>
  );
}

export default App;
