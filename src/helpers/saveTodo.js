import getSavedTodos from './getSavedTodos';

export default (todo) => {
	const { stringify } = window.JSON;
	const todos = getSavedTodos();
	const todosToSave = todos ? [...todos, todo] : [todo];

	localStorage.setItem('todos', stringify(todosToSave));
};
