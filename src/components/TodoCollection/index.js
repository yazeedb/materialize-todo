import React from 'react';
import Todo from '../Todo';

const makeTodoCollection = (todos) => (
	<ul className="todos collection">
		{
			todos.map(({ id, name, completed }) => (
				<li className="collection-item avatar" key={ id }>
					<i className="material-icons">&#xE835;</i>

					<Todo
						id={ id }
						name={ name }
						completed={ completed }
					/>

					<a className="btn-floating red secondary-content">
						<i className="material-icons">&#xE92B;</i>
					</a>
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
