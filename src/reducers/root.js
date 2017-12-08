import { ADD_TODO } from 'actions/todo';

export default (state, action) => {
	console.log('todo reducer state:', state);
	console.log('todo reducer got this action:', action);
	switch (action.type) {
			case ADD_TODO:
				return {
					...state,
					todos: [...state.todos, action.todo]
				};

			default:
				return state;
	}
};
