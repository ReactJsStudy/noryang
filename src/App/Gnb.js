import React from 'react';
import { Link } from 'react-router';

const Gnb = () => {
    return (
        <header>
            <Link className="home" to="/">Home</Link>{' '}
            <Link to="/gomugom">gomugom</Link>
            <Link to="/arusantiomo">Arusantimo</Link>
        </header>
    )
};

export default Gnb
