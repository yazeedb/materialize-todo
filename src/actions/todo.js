import makeTodo from 'helpers/makeTodo';

export const ADD_TODO = 'ADD_TODO';
export const addTodo = (todo) => ({
	type: ADD_TODO,
	todo: makeTodo(todo)
});

export const TOGGLE_TODO = 'TOGGLE_TODO';
export const toggleTodo = (id, completed) => ({
	type: TOGGLE_TODO,
	id,
	completed
});

export const DELETE_TODO = 'DELETE_TODO';
export const deleteTodo = (id) => ({
	type: DELETE_TODO,
	id
});
