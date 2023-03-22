import React from "react";
import TodoItem from "./TodoItem";

const TodoList = props => {
	if (props.list.length === 0) {
		return;
	}

	const clickHandler = event => {
		console.log(event.target.key);
	};

	return (
		<div>
			{props.list.map(item => (
				<TodoItem
					key={item.id}
					text={item.text}
				/>
			))}
		</div>
	);
};

export default TodoList;