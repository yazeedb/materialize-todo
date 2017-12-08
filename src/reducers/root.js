import { assoc, equals, ifElse, pipe, prop } from 'ramda';
import { ADD_TODO, TOGGLE_TODO } from 'actions/todo';

export default (state, action) => {
	console.log('todo reducer state:', state);
	console.log('todo reducer got this action:', action);

	switch (action.type) {
			case ADD_TODO:
				return {
					...state,
					todos: [...state.todos, action.todo]
				};

			case TOGGLE_TODO:
				return {
					...state,
					todos: state.todos.map(
						ifElse(
							pipe(prop('id'), equals(action.id)),
							assoc('completed', !action.completed),
							(todo) => todo
						)
					)
				};

			default:
				return state;
	}
};
