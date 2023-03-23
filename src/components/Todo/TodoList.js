import React from "react";
import TodoItem from "./TodoItem";

const TodoList = props => {
	if (props.list.length === 0) {
		// TODO: return some default text when list is empty
		return;
	}

	return (
		<div>
			{props.list.map(item => (
				<TodoItem
					key={item.id}
					id={item.id}
					text={item.text}
					onDelete={props.onDelete}
					onComplete={props.onComplete}
				/>
			))}
		</div>
	);
};

export default TodoList;