import React from "react";
import Card from "../UI/Card";

const TodoForm = props => {
	return (
		<Card>
			<form>
				<label htmlFor='todo-text'>Enter Todo Item</label>
				<input id='todo-text' type='text' />
				<button>Add to list</button>
			</form>
		</Card>
	);
};

export default TodoForm;