export default (store) => (next) => (action) => {
	const result = next(action);
	const { todos } = store.getState();

	localStorage.setItem('todos', JSON.stringify(todos));

	return result;
};
