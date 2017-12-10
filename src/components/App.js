import React from 'react';
import { connect } from 'react-redux';
import AddTodo from './AddTodo';
import TodoCollection from './TodoCollection';
import * as todoActions from 'actions/todo';

const style = {
	textAlign: 'center',
	maxWidth: '960px',
	margin: '0 auto',
	width: '66%'
};

const App = ({ todos, addTodo, deleteTodo, changeTodoName, toggleTodo }) => (
	<div className="app" style={ style }>
		<h1>Todo List</h1>

		<AddTodo handleSubmit={ addTodo } />

		<TodoCollection
			todos={ todos }
			handleDeleteTodo={ deleteTodo }
			handleChangeTodoName={ changeTodoName }
			handleToggleTodo={ toggleTodo }
		/>
	</div>
);

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, todoActions)(App);
