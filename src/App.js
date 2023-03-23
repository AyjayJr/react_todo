import React, { useReducer, useEffect } from "react";

import TodoForm from "./components/Todo/TodoForm";
import TodoList from "./components/Todo/TodoList";

import classes from './App.module.css';

const reducer = (state, action) => {
  if (action.type === 'ADD') {
    return [...state, {id: crypto.randomUUID(), text: action.val, complete: false}] 
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
  };

  const toggleCompleteHandler = (val) => {
    dispatchTodo({type: 'COMPLETE', id: val})
  };

  return (
    <div>
      <h1 className={classes.todoer}><i>todo-er</i></h1>
      <TodoForm onSubmit={addTodoHandler} />
      <TodoList
        list={todoList}
        onDelete={removeTodoHandler}
        onComplete={toggleCompleteHandler}
      />
      <footer className={classes.footer}>
        created by <a href='https://github.com/AyjayJr'>Anthony Garcia</a>
      </footer>
    </div>
  );
}

export default App;
