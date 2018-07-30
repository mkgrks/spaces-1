import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";

import createHistory from "history/createBrowserHistory";
import App from "./containers/App/App";
import registerServiceWorker from "./registerServiceWorker";
import configureStore from "./store/store";

import "./index.css";

const history = createHistory();

ReactDOM.render(
	<Provider store={configureStore(history)}>
		<ConnectedRouter history={history}>
			<App />
		</ConnectedRouter>
	</Provider>,
	document.getElementById("root")
);
registerServiceWorker();
