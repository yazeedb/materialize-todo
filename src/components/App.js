import React, { Component } from 'react';
import AddTodo from './AddTodo';

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
		console.log('addTodo got value:', value);

		const { todos } = this.state;

		this.setState({ todos: [...todos, value] }, () => {
			console.log('my todos:', this.state.todos);
		});
	}

	render() {
		return (
			<div className="app" style={ style }>
				<h1>Todo List</h1>
				<AddTodo
					handleSubmit={ this.addTodo }
				/>
			</div>
		);
	}
}
