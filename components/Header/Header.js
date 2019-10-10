import React from 'react';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import LanguagePicker from '../LanguagePicker/LanguagePicker';
import './Header.scss';

const Header = props => (
    <header>
        <section className='site-header'>
            <Logo />
            <LanguagePicker />
            <Nav {...props} />
        </section>
    </header>
);

export default Header;
