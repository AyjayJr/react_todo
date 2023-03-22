import React from "react";
import Card from "../UI/Card";

const TodoItem = props => {
	const deleteHandler = () => {
		props.onDelete(props.id)
	};

	return (
		<Card onClick={deleteHandler}>
			{props.text}
		</Card>
	);
};

export default TodoItem;