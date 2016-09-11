import React from 'react';
import { Link } from 'react-router';

const Gnb = () => {
    return (
        <header>
            Links:{' '}
            <Link to="/">Home</Link>{' '}
            <Link to="/gomugom">gomugom</Link>
        </header>
    )
};

export default Gnb
