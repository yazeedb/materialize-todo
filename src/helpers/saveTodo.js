export default (todo) => {
	const { parse, stringify } = window.JSON;
	const todos = parse(localStorage.getItem('todos'));
	const todosToSave = todos ? [...todos, todo] : [todo];

	localStorage.setItem('todos', stringify(todosToSave));
};
