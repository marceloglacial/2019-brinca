import siteConfig from '../../components/Global/Global';
import Head from 'next/head';
import Link from 'next/link';

import '../../node_modules/bootstrap/scss/bootstrap.scss';
import './Nav.scss';

import { useState } from 'react';

const Nav = props => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    const nav = props.data;

    const navitens = (
        // Not dynamic menu
        // ================
        // <ul className={`site-nav--header__items container ${isOpen ? 'is-open' : ''}`}>
        //     {nav.map(post => (
        //         <li className='site-nav--header__item' key={post.id}>
        //             <Link href='[id]' as={`${post.slug}`}>
        //                 <a onClick={toggleMenu}>{post.title.rendered}</a>
        //             </Link>
        //         </li>
        //     ))}
        // </ul>
        <div className={`site-nav--header__items container ${isOpen ? 'is-open' : ''}`} dangerouslySetInnerHTML={{ __html: nav.content.rendered }} />
    );

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
