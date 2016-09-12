import React from 'react';
import Gnb from './Gnb';

const App = ({ children }) => (
    <div
      className="allWrap"
      style={{
        height: window.innerHeight
      }}
    >
        <Gnb />
        <div className="contentWrap">{children}</div>
    </div>
);

export default App;
