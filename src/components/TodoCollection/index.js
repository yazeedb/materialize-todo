import React from 'react';
import Todo from '../Todo';

export default ({ todos }) => (
	<div className="todos">
		{
			todos.map(({ id, name, completed }) => (
				<Todo
					id={ id }
					name={ name }
					completed={ completed }
					key={ id }
				/>
			))
		}
	</div>
);
