import React, { useState } from "react";
import Card from "../UI/Card";

import classes from './TodoForm.module.css';

const TodoForm = props => {
	const [todo, setTodo] = useState('');

	const inputHandler = (event) => {
		setTodo(event.target.value);
	};

	const submitHandler = (event) => {
		event.preventDefault();
		props.onSubmit(todo);
		setTodo('');
	};

	return (
		<form className={classes.container} onSubmit={submitHandler}>
			<input
				className={classes.todoInput}
				type='text'
				value={todo}
				onChange={inputHandler}
				placeholder='What do you need to do?'
			/>
		</form>
	);
};

export default TodoForm;