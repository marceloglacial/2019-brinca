import React from 'react';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import './Header.scss';

const Header = props => (
    <header>
        <section className='site-header'>
            <Logo {...props} />
            <Nav {...props} />
        </section>
    </header>
);

export default Header;
