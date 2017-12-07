import React from 'react';
import { render } from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from 'reducers/root';
import App from './components/App';
import './global.scss';

const ConnectedApp = () => (
	<Provider store={ createStore(rootReducer, applyMiddleware(thunk)) }>
		<App />
	</Provider>
);

render(
	<ConnectedApp />,
	document.getElementById('root')
);
