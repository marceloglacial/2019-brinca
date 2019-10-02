import siteConfig from '../../components/Global/Global';
import Head from 'next/head';
import './Nav.scss';

import { useState } from 'react';

const Nav = props => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    const nav = props.data;

    const navitens = <div className={`site-nav--header__items container ${isOpen ? 'is-open' : ''}`} dangerouslySetInnerHTML={{ __html: nav.content.rendered }} />;

    return (
        <>
            <Head>
                <link rel='shortcut icon' type='image/x-icon' href={siteConfig.favicon} />
            </Head>
            <nav className={`site-nav site-nav--header`}>
                <button className={`site-nav site-nav-button ${isOpen ? 'is-open' : ''}`} onClick={toggleMenu} />
                {navitens}
            </nav>
        </>
    );
};

export default Nav;
