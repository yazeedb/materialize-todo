import React from 'react';
import AddTodo from './AddTodo';

const style = {
	textAlign: 'center',
	maxWidth: '960px',
	margin: '0 auto',
	width: '66%'
};

export default () => (
	<div className="app" style={ style }>
		<h1>Todo List</h1>
		<AddTodo />
	</div>
);
