import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';

const thunk = store => next => action =>
	typeof action === 'function' ? action(store.dispatch, store.getState) : next(action);

const logger = store => next => action => {
	if(action && action.type)console.log(action.type);
	return next(action);
};

const store = process.env.NODE_ENV === 'development'
	? createStore(reducers, compose(
		applyMiddleware(logger, thunk),
		window.devToolsExtension ? window.devToolsExtension() : f => f
	))
	: createStore(reducers, compose(
		applyMiddleware(thunk)
	));

export default store;
