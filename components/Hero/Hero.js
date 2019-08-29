import React from 'react';
import './Hero.scss';

const Hero = props => {
    // Get data
    const posts = props.postsData;
    const cats = props.catData;

    // Find hero cat id
    const heroCat = cats.map(heroCat => {
        const { id, slug } = heroCat;

        if (slug === 'destaques') {
            return id;
        }
    });

    // Display Hero items
    const heroItems = posts.map(heroItems => {
        const { id, excerpt, title, categories, jetpack_featured_media_url, slug } = heroItems;

        // Has hightlight category?
        let isHighlight = categories.find(function(element) {
            return parseInt(element) === parseInt(heroCat);
        });

        // Show only highlighted posts
        if (isHighlight) {
            let permalink = '/' + slug;
            let style = {
                background: `url(${jetpack_featured_media_url}) no-repeat center 30%`,
                backgroundColor: `black`,
                backgroundSize: `cover`,
            };

            return (
                <a href={permalink} key={permalink}>
                    <div className='hero__item' key={id} style={style}>
                        <div className='container'>
                            <div className='hero__info'>
                                <h1 className='hero__title' dangerouslySetInnerHTML={{ __html: title.rendered }} key={title.rendered} />
                                <div className='hero__description' dangerouslySetInnerHTML={{ __html: excerpt.rendered }} key={excerpt.rendered} />
                            </div>
                        </div>
                    </div>
                </a>
            );
        }
    });

    return (
        <div className='hero' key='hero'>
            {heroItems}
        </div>
    );
};

export default Hero;
