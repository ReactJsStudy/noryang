import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import store, { getState } from './App/store';
import routes from './App/routes';
import './scss/normalize.scss';
import './scss/style.scss';

import App from './App/App';
import Home from './Home/components/Home';
import Gomugom from './Gomugom/components/Gomugom';
import ArusantimoMain from './Arusantimo/components/ArusantimoMain';

const history = syncHistoryWithStore(browserHistory, store);

render((
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}>
				<IndexRoute component={Home} />
				<Route path="gomugom" component={Gomugom}
					onEnter={()=>{ console.log('Gomugom page rendered'); }} />
				<Route path="arusantimo" component={ArusantimoMain}
					onEnter={()=>{ console.log('welcome Arusantimo page!! enjoy~~'); }} />
			</Route>
		</Router>
	</Provider>
), document.getElementById('root'));
