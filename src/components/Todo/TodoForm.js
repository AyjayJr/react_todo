import React, { useState } from "react";
import Card from "../UI/Card";

const TodoForm = props => {
	const [todo, setTodo] = useState('');	

	const inputHandler = (event) => {
		setTodo(event.target.value);
	};

	const buttonHandler = (event) => {
		event.preventDefault();	
		props.onSubmit(todo);
		setTodo('');
	};

	return (
		<Card>
			<form>
				<label htmlFor='todo-text'>Enter Todo Item</label>
				<input id='todo-text' type='text' value={todo} onChange={inputHandler} />
				<button onClick={buttonHandler}>Add to list</button>
			</form>
		</Card>
	);
};

export default TodoForm;