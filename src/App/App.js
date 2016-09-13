import React from 'react';
import Gnb from './Gnb';

const App = ({ children }) => (
    <div id="wrap">
        <Gnb />
        <div id="contents">{children}</div>
    </div>
);

export default App;
