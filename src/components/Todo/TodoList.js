import React from "react";
import Card from "../UI/Card";

const TodoList = props => {
	if (props.list.length === 0) {
		return;
	}

	const clickHandler = event => {
		console.log(event.target.key);
	};

	return (
		<div>
			{props.list.map(item => (<Card onClick={clickHandler} key={item.id}><li>{item.text}</li></Card>))}
		</div>
	);
};

export default TodoList;