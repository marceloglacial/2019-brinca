import './Nav.scss';
import Head from 'next/head';
import LanguagePicker from '../LanguagePicker/LanguagePicker';
import { useState } from 'react';

const Nav = props => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    const nav = props.data;
    const { icon } = props.site;

    const navitens = (
        <div className={`site-nav--header__items container ${isOpen ? 'is-open' : ''}`}>
            <div className='site-nav--header__items_container' dangerouslySetInnerHTML={{ __html: nav.content.rendered }} />
            <LanguagePicker {...props} />
        </div>
    );

    return (
        <>
            <Head>
                <meta name='robots' content='index, follow' />
                <link rel='shortcut icon' type='image/x-icon' href={icon.img} />
            </Head>
            <nav className={`site-nav site-nav--header`}>
                <button name='mobile-menu' className={`site-nav site-nav-button ${isOpen ? 'is-open' : ''}`} onClick={toggleMenu}>
                    <span>Menu</span>
                </button>
                {navitens}
            </nav>
        </>
    );
};

export default Nav;
