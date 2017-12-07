import React, { Component } from 'react';
import AddTodo from './AddTodo';
import TodoCollection from './TodoCollection';
import getSavedTodos from 'helpers/getSavedTodos';
import makeTodo from 'helpers/makeTodo';
import saveTodo from 'helpers/saveTodo';

const style = {
	textAlign: 'center',
	maxWidth: '960px',
	margin: '0 auto',
	width: '66%'
};

export default class App extends Component {
	constructor(props) {
		super(props);

		this.addTodo = this.addTodo.bind(this);

		this.state = {
			todos: getSavedTodos() || []
		};
	}

	addTodo(value) {
		const { todos } = this.state;
		const newTodo = makeTodo(value);

		this.setState({ todos: [...todos, newTodo] }, () => {
			console.log('my todos:', this.state.todos);
			saveTodo(newTodo);
		});
	}

	render() {
		const { todos } = this.state;

		return (
			<div className="app" style={ style }>
				<h1>Todo List</h1>

				<AddTodo handleSubmit={ this.addTodo } />
				<TodoCollection todos={ todos } />
			</div>
		);
	}
}
