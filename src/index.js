import React from 'react';
import { render } from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from 'reducers/root';
import getSavedTodos from './helpers/getSavedTodos';
import App from './components/App';
import './global.scss';

const initialState = {
	todos: getSavedTodos() || []
};

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

const ConnectedApp = () => (
	<Provider store={ store }>
		<App />
	</Provider>
);

render(
	<ConnectedApp />,
	document.getElementById('root')
);
