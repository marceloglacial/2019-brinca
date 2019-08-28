import React from 'react';
import './Header.scss';
import Link from 'next/link';

const Header = props => {
    // Get data
    const menuItems = props.navMenuData;
    const siteItems = props.siteData;
    const { name: siteName, description: siteDescription } = siteItems;

    // Display Logo
    const siteLogo = menuItems.map(siteLogo => {
        const { content, slug } = siteLogo;
        if (slug === 'header-logo') {
            return <div className='site-logo' dangerouslySetInnerHTML={{ __html: content.rendered }} key={slug} />;
        }
    });

    // Display Menu items
    const navMenuItems = menuItems.map(navMenuItems => {
        const { content, slug } = navMenuItems;

        if (slug === 'cabecalho-menu-items') {
            return (
                <div className='site-menu--header__menu-top-container' key='site-menu--header__menu-top-container'>
                    <h2 className='site-menu--header__menu-top-container__title'>Menu</h2>
                    <div className='site-menu--header__menu-top' dangerouslySetInnerHTML={{ __html: content.rendered }} key={slug} />
                </div>
            );
        }

        if (slug === 'telephone') {
            return <div className='site-menu--header__telephone' dangerouslySetInnerHTML={{ __html: content.rendered }} key={slug} />;
        }

        if (slug === 'language') {
            const toggleLanguage = e => {
                let menu = document.querySelector('.site-menu--header__language');
                let menuClass = menu.className;

                menuClass === 'site-menu--header__language is-open' ? '' : e.preventDefault();
                menu.classList.toggle('is-open');
            };

            return <div className='site-menu--header__language' dangerouslySetInnerHTML={{ __html: content.rendered }} key={slug} onTouchEnd={toggleLanguage} />;
        }
    });

    // Open/Close Mobile menu
    const toggleMenu = () => {
        let menu = document.querySelector('.site-menu--header-container');
        let button = document.querySelector('.site-menu--header__button');

        menu.classList.toggle('is-open');
        button.classList.toggle('is-open');
    };

    return (
        <>
            <header className='site-header container'>
                <div className='site-logo' key='site-logo'>
                    <Link href='/'>
                        <a className='site-logo__link'>
                            <div className='site-logo__img'>{siteLogo}</div>
                        </a>
                    </Link>
                </div>
                <div className='site-info'>
                    <h1 className='site-info__title'>{siteName}</h1>
                    <p className='site-info__description'>{siteDescription}</p>
                </div>
                <div className='site-menu--header-container'>
                    <div className='site-menu--header'>{navMenuItems}</div>
                </div>
                <button className='site-menu--header__button' onClick={toggleMenu} />
            </header>
        </>
    );
};

export default Header;
