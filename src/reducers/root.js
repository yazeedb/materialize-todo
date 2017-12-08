import getSavedTodos from 'helpers/getSavedTodos';

const initialState = {
	todos: getSavedTodos() || []
};

export default (state = initialState, action) => {
	switch (action.type) {
			case 'ADD_TODO':
				return {
					...state,
					todos: [...state.todos, action.todo]
				};

			default:
				return state;
	}
};
