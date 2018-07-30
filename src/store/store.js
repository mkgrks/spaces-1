import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from "react-router-redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import reducers from "./reducers";

function configureStore(history) {
	const middleware = routerMiddleware(history);
	const sagaMiddleware = createSagaMiddleware();
	const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

	const store = createStore(
		reducers,
		composeEnchancers(applyMiddleware(sagaMiddleware, middleware))
	);

	sagaMiddleware.run(rootSaga);

	return store;
}

export default configureStore;
