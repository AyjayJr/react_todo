import React from "react";
import TodoItem from "./TodoItem";

const TodoList = props => {
	if (props.list.length === 0) {
		return;
	}

	const clickHandler = event => {
		console.log(event.target.id);

	};

	return (
		<div>
			{props.list.map(item => (
				<TodoItem
					key={item.id}
					id={item.id}
					text={item.text}
					onDelete={props.onDelete}
				/>
			))}
		</div>
	);
};

export default TodoList;