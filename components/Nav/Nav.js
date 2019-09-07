import React from 'react';
import siteConfig from '../../global/global';
import Head from 'next/head';
import Link from 'next/link';

import '../../node_modules/bootstrap/scss/bootstrap.scss';
import './Nav.scss';

const Nav = props => {
    const nav = props.data;

    const navitens = (
        <ul className='site-nav--header__items container'>
            {nav.map(post => (
                <li className='site-nav--header__item' key={post.id}>
                    <Link href='[id]' as={`${post.slug}`}>
                        <a>{post.title.rendered}</a>
                    </Link>
                </li>
            ))}
            <li className='site-nav--header__item' key='fale-conosco'>
                    <Link href='fale-conosco' as='fale-conosco'>
                        <a>Fale Conosco</a>
                    </Link>
                </li>
        </ul>
    );

    return (
        <>
            <Head>
                <link rel='shortcut icon' type='image/x-icon' href={siteConfig.favicon} />
            </Head>
            <nav className='site-nav site-nav--header'>{navitens}</nav>
        </>
    );
};

export default Nav;
