import makeTodo from 'helpers/makeTodo';

export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';

const updateTodo = (prop) => (id) => (dispatch) => (newValue) => {
	dispatch({
		type: UPDATE_TODO,
		id,
		prop,
		newValue
	});
};

export const addTodo = (todo) => ({
	type: ADD_TODO,
	todo: makeTodo(todo)
});

export const deleteTodo = (id) => ({
	type: DELETE_TODO,
	id
});

export const changeTodoName = updateTodo('name');
export const toggleTodo = updateTodo('completed');
