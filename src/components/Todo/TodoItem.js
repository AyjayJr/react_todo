import React from "react";
import Card from "../UI/Card";

import classes from './TodoItem.module.css'

const TodoItem = props => {
	const deleteHandler = () => {
		props.onDelete(props.id)
	};

	return (
		<div className={classes.todoItem}>
			<button>O</button>
			<span>{props.text}</span>
			<button className={classes.deleteBtn} onClick={deleteHandler}>X</button>
		</div>
	);
};

export default TodoItem;