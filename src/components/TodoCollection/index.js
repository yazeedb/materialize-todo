import React from 'react';
import Todo from '../Todo';

const makeTodoCollection = (todos) => (
	<ul className="todos collection">
		{
			todos.map(({ id, name, completed }) => (
				<li className="collection-item">
					<Todo
						id={ id }
						name={ name }
						completed={ completed }
						key={ id }
					/>
				</li>
			))
		}
	</ul>
);

export default ({ todos }) => (
	<div className="todos">
		{ todos.length > 0 && makeTodoCollection(todos) }
	</div>
);
