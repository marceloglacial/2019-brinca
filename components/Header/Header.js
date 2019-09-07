import React from 'react';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import './Header.scss';

const Header = props => (
    <header>
        <div className='site-header'>
            <Logo />
            <Nav {...props} />
        </div>
    </header>
);

export default Header;
