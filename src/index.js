import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory, Router } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import store, { getState } from './App/store';
import routes from './App/routes';
import './scss/normalize.scss';
import './scss/style.scss';

const history = syncHistoryWithStore(browserHistory, store);

render((
	<Provider store={store}>
		<Router
			history={history}
			routes={routes(getState)}
		/>
	</Provider>
), document.getElementById('root'));
