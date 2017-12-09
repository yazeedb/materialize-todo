import makeTodo from 'helpers/makeTodo';

export const ADD_TODO = 'ADD_TODO';
export const addTodo = (todo) => ({
	type: ADD_TODO,
	todo: makeTodo(todo)
});

export const DELETE_TODO = 'DELETE_TODO';
export const deleteTodo = (id) => ({
	type: DELETE_TODO,
	id
});

export const UPDATE_TODO = 'UPDATE_TODO';
export const updateTodo = (id, prop) => (dispatch) => (newValue) => dispatch({
	type: UPDATE_TODO,
	id,
	prop,
	newValue
});
