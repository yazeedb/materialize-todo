export default (todos) => {
	localStorage.setItem('todos', JSON.stringify(todos));
};
