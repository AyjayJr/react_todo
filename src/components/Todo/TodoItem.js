import React, { useState } from "react";

import classes from './TodoItem.module.css'

const TodoItem = props => {
	const deleteHandler = () => {
		props.onDelete(props.id)
	};

	const changeHandler = () => {
		props.onComplete(props.id);
	};

	return (
		<div className={classes.todoItem}>
			<input className={classes.toggle} type='checkbox' onChange={changeHandler}/>
			<span>{props.text}</span>
			<button className={classes.deleteBtn} onClick={deleteHandler}>X</button>
		</div>
	);
};

export default TodoItem;