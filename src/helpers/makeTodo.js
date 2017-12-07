import { generate } from 'shortid';

export default (todo) => ({
	id: generate(),
	name: todo,
	completed: false
});
