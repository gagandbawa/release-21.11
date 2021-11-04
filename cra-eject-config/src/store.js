import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import generateRootSaga from './sagas';
import * as commonReducers from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

function withDevTools(mws) {
	const composeEnhancers = composeWithDevTools({ trace: true });
	typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ mws })
		: compose;
	return composeEnhancers(mws);
}

const reducers = {
	...(commonReducers || {}),
};

export const sagaMiddleware = createSagaMiddleware();

export default function configureStore(options) {
	const middlewares = [sagaMiddleware];
	const middlewareEnhancer = applyMiddleware(...middlewares);
	const rootReducer = combineReducers({
		...reducers,
		...(options?.reducers || {}),
	});

	const store = createStore(
		rootReducer,
		options?.initialState,
		withDevTools(middlewareEnhancer)
	);
	sagaMiddleware.run(generateRootSaga(options?.sagasActionWatcher));
	return store;
}
