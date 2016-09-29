import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Header from './components/common/Header';
import Main   from './components/main/Main';
import About  from './components/about/About';
import ManageBoard from './components/about/ManageBoard';

export default (
        <Route path="/" component={Header}>
            <IndexRoute component={Main} />
            <Route path="main" component={Main} />
            <Route path="about" component={About} />
            <Route path="about/:id" component={ManageBoard} />
            <Route path="write" component={ManageBoard} />
        </Route>
    );
