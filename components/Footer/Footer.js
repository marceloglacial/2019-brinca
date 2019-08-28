import React from 'react';
import './Footer.scss';
import Link from 'next/link';

const Footer = props => {
    // Get data
    const menuItems = props.navMenuData;

    // Display Menu items
    const rodapeItems = menuItems.map(rodapeItems => {
        const { content, slug } = rodapeItems;

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

        if (slug === 'menu-rodape-copyright') {
            return (
                <div className='menu-rodape-copyright' key='menu-rodape-copyright'>
                    <div className='container' dangerouslySetInnerHTML={{ __html: content.rendered }} key={slug} />
                </div>
            );
        }

    });

    return (    
        <>
            <div className='site-footer'>{rodapeItems}</div>
        </>
    );
};

export default Footer;
