import { assoc, equals, identity, ifElse, not, pipe, prop } from 'ramda';
import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from 'actions/todo';

export default (state, action) => {
	switch (action.type) {
			case ADD_TODO:
				return {
					...state,
					todos: [...state.todos, action.todo]
				};

			case DELETE_TODO:
				return {
					...state,
					todos: state.todos.filter(
						pipe(
							prop('id'),
							equals(action.id),
							not
						)
					)
				};

			case TOGGLE_TODO:
				return {
					...state,
					todos: state.todos.map(
						ifElse(
							pipe(prop('id'), equals(action.id)),
							assoc('completed', !action.completed),
							identity
						)
					)
				};

			default:
				return state;
	}
};
