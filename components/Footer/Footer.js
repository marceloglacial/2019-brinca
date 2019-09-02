import React from 'react';
import './Footer.scss';

const Footer = props => {
    // Get data
    const menuItems = props.pagesData;

    // Display Menu items
    const rodapeItems = menuItems.map(rodapeItems => {
        const { content, slug } = rodapeItems;

        if (slug === 'rodape-social') {
            return (
                <div className='site-footer-social' key='site-footer-social'>
                    <div className='site-footer-social-items container' dangerouslySetInnerHTML={{ __html: content.rendered }} key={slug} />
                </div>
            );
        }

        if (slug === 'rodape-menu') {
            return (
                <div className='site-footer-menu-container' key='site-footer-menu-container'>
                    <div className='site-footer-menu container' dangerouslySetInnerHTML={{ __html: content.rendered }} key={slug} />
                </div>
            );
        }
    });

    const siteHeaderCopyright = menuItems.map(rodapeItems => {
        const { content, slug } = rodapeItems;

        if (slug === 'rodape-copyright') {
            return (
                <div className='site-footer-copyright' key='site-footer-copyright'>
                    <div className='site-footer-copyright__items container'>
                        <div dangerouslySetInnerHTML={{ __html: content.rendered }} key={slug} />
                        <div className='site-footer-copyright__developer'>
                            <p>
                                Developed by <a href='http://marceloglacial.com/'>Marcelo Glacial</a>
                            </p>
                        </div>
                    </div>
                </div>
            );
        }
    });

    return (
        <>
            <div className='site-footer'>{rodapeItems}</div>
            {siteHeaderCopyright}
        </>
    );
};

export default Footer;
