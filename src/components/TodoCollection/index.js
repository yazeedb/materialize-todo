import React from 'react';
import Todo from '../Todo';

const makeTodoCollection = (todos) => (
	<ul className="todos collection">
		{
			todos.map(({ id, name, completed }) => (
				<li className="collection-item" key={ id }>
					<Todo
						id={ id }
						name={ name }
						completed={ completed }
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
