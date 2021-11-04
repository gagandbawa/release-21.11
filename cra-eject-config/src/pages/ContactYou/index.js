import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from '../../components/App';
import configureStore from '../../store';
// Set public path for webpack
__webpack_public_path__ = window.resourceBaseUrl || __webpack_public_path__;

console.log('Gagan Contct you index');

function Routes() {
	return (
		<Switch>
			<Route exact path='/contactyou.html'>
				<h1>This is the contact you index file from react</h1>
			</Route>
		</Switch>
	);
}

const options = {
	reducers: {
		shop: {},
	},
};

ReactDOM.render(
	<React.StrictMode>
		<Provider store={configureStore(options)}>
			<App>
				<Router>
					<Routes />
				</Router>
			</App>
		</Provider>
	</React.StrictMode>,
	document.getElementById('page')
);
