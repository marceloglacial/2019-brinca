import React from 'react';
import './Footer.scss';
import Link from 'next/link';

const Footer = props => {
    // Get data
    const menuItems = props.navMenuData;

    // Display Menu items
    const navMenuItems = menuItems.map(navMenuItems => {
        const { content, slug } = navMenuItems;

        if (slug === 'menu-rodape-social') {
            return (
                <div className='menu-rodape-social' key='menu-rodape-social'>
                    <div className='menu-rodape-social-items container' dangerouslySetInnerHTML={{ __html: content.rendered }} key={slug} />
                </div>
            );
        }

        if (slug === 'menu-rodape') {
            return (
                <div className='menu-rodape-items-container' key='menu-rodape-items-container'>
                    <div className='menu-rodape-items container' dangerouslySetInnerHTML={{ __html: content.rendered }} key={slug} />
                </div>
            );
        }
    });

    return (
        <>
            <div className='site-footer'>{navMenuItems}</div>
        </>
    );
};

export default Footer;
