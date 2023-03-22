import React from "react";
import Card from "../UI/Card";

const TodoItem = props => {
	return (
		<Card>
			{props.text}
		</Card>
	);
};

export default TodoItem;