import React from 'react';
import './Hero.scss';

const Hero = props => {
    // Get data
    const data = props.data;

    // Display Items
    const heroItems = data.map(heroItems => {
        const { content, slug } = heroItems;

        if (slug === 'destaques') {
            return (
                <div className='site-footer-copyright' key='site-footer-copyright'>
                    {/* <div className='container' dangerouslySetInnerHTML={{ __html: content.rendered }} key={slug} /> */}
                </div>
            );
        }
    });

    return (
        <>
            <div className='site-footer'>{heroItems}</div>
        </>
    );
};

export default Hero;
