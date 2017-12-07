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
		this.toggleTodo = this.toggleTodo.bind(this);

		this.state = {
			todos: getSavedTodos() || []
		};
	}

	addTodo(value) {
		const { todos } = this.state;
		const newTodo = makeTodo(value);

		this.saveTodos([...todos, newTodo]);
	}

	toggleTodo(id) {
		const { todos } = this.state;
		const oldTodo = todos.find((todo) => id === todo.id);
		const updatedTodos = todos.map((todo) => (
			todo.id === id ?
				{ ...oldTodo, completed: !oldTodo.completed } : todo
		));

		this.saveTodos(updatedTodos);
	}

	saveTodos(todos) {
		this.setState({ todos }, () => {
			console.log('new todos:', this.state.todos);
			saveTodo(this.state.todos);
		});
	}

	render() {
		const { todos } = this.state;

		return (
			<div className="app" style={ style }>
				<h1>Todo List</h1>

				<AddTodo handleSubmit={ this.addTodo } />
				<TodoCollection
					todos={ todos }
					handleToggleTodo={ this.toggleTodo }
				/>
			</div>
		);
	}
}
