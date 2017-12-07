import React, { Component } from 'react';
import AddTodo from './AddTodo';
import TodoCollection from './TodoCollection';
import makeTodo from 'helpers/makeTodo';

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
			todos: []
		};
	}

	addTodo(value) {
		const { todos } = this.state;

		this.setState({ todos: [...todos, makeTodo(value)] }, () => {
			console.log('my todos:', this.state.todos);
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
