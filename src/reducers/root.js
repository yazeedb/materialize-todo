import {
	assoc,
	identity,
	ifElse,
	reject
} from 'ramda';
import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from 'actions/todo';

const matchTodoId = (action) => (todo) => action.id === todo.id;

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
					todos: reject(matchTodoId(action))(state.todos)
				};

			case TOGGLE_TODO:
				return {
					...state,
					todos: state.todos.map(
						ifElse(
							matchTodoId(action),
							assoc('completed', !action.completed),
							identity
						)
					)
				};

			default:
				return state;
	}
};
