import {
	assoc,
	identity,
	ifElse,
	reject
} from 'ramda';
import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from 'actions/todo';

const matchTodoId = (action) => (todo) => action.id === todo.id;

export default (state, action) => {
	console.log('got this state:', state);
	console.log('got this action:', action);
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

			case UPDATE_TODO:
				return {
					...state,
					todos: state.todos.map(
						ifElse(
							matchTodoId(action),
							assoc(action.prop, action.newValue),
							identity
						)
					)
				};

			default:
				return state;
	}
};
