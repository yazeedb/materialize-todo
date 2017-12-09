import React from 'react';
import Todo from '../Todo';

const listStyles = {
	padding: 0
};

export default ({
	todos,
	handleDeleteTodo,
	handleUpdateTodo
}) => (
	<div className="todos">
		{ todos.length > 0 && (
			<ul className="todos collection">
				{
					todos.map(({ id, name, completed }) => (
						<li
							className="collection-item"
							style={ listStyles }
							key={ id }
						>
							<Todo
								id={ id }
								name={ name }
								completed={ completed }
								handleCheck={
									handleUpdateTodo(id, 'completed')
								}
								handleDelete={ handleDeleteTodo }
								handleUpdate={ handleUpdateTodo(id, 'name') }
							/>
						</li>
					))
				}
			</ul>
		) }
	</div>
);
