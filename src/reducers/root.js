import {
	assoc,
	reject,
	when
} from 'ramda';
import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from 'actions/todo';

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

			case UPDATE_TODO:
				return {
					...state,
					todos: state.todos.map(
						when(
							matchTodoId(action),
							assoc(action.prop, action.newValue)
						)
					)
				};

			default:
				return state;
	}
};
