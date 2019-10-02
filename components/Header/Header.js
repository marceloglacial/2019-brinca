import React from 'react';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import Telephone from '../Telephone/Telephone';
import './Header.scss';

const Header = props => (
    <header>
        <section className='site-header'>
            <Logo />
            <Nav {...props} />
            <div className='site-header__telephone'>
                <Telephone />
            </div>
        </section>
    </header>
);

export default Header;
