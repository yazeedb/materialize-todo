import makeTodo from 'helpers/makeTodo';

export const ADD_TODO = 'ADD_TODO';
export const addTodo = (todo) => ({
	type: ADD_TODO,
	todo: makeTodo(todo)
});
