import React from 'react';
import Gnb from './Gnb';

const App = ({ children }) => (
    <div>
        <Gnb />
        <div>{children}</div>
    </div>
);

export default App;
