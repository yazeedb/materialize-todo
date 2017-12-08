import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddTodo from './AddTodo';
import TodoCollection from './TodoCollection';
import getSavedTodos from 'helpers/getSavedTodos';
import makeTodo from 'helpers/makeTodo';
import saveTodo from 'helpers/saveTodo';
import * as todoActions from 'actions/todo';

const style = {
	textAlign: 'center',
	maxWidth: '960px',
	margin: '0 auto',
	width: '66%'
};

class App extends Component {
	constructor(props) {
		super(props);

		this.addTodo = this.addTodo.bind(this);
		this.deleteTodo = this.deleteTodo.bind(this);
		this.toggleTodo = this.toggleTodo.bind(this);
	}

	addTodo(value) {
		const { todos } = this.state;
		const newTodo = makeTodo(value);

		this.saveTodos([newTodo, ...todos]);
	}

	deleteTodo(id) {
		const newTodos = this.state
			.todos
			.filter((todo) => todo.id !== id);

		this.saveTodos(newTodos);
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
		const { todos, addTodo } = this.props;
		console.log('app props:', this.props);

		return (
			<div className="app" style={ style }>
				<h1>Todo List</h1>

				<AddTodo handleSubmit={ addTodo } />

				<TodoCollection
					todos={ todos }
					handleToggleTodo={ this.toggleTodo }
					handleDeleteTodo={ this.deleteTodo }
				/>
			</div>
		);
	}
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, todoActions)(App);
