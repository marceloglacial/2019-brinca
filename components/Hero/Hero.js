import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Link from 'next/link';
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
                objectFit: `cover`
            };

            return (
                <Carousel.Item key={`carousel-${permalink}`}>
                    <Link href={`/eventos${permalink}`}>
                        <a key={permalink}>
                            {/* <img className='d-block w-100' src={jetpack_featured_media_url} alt='' /> */}
                            <div className=' hero__item' style={style}>
                                <div className='container'>
                                    <div className='hero__info'>
                                        <h1 className='hero__title' dangerouslySetInnerHTML={{ __html: title.rendered }} key={title.rendered} />
                                        <div className='hero__description' dangerouslySetInnerHTML={{ __html: excerpt.rendered }} key={excerpt.rendered} />
                                    </div>
                                </div>
                            </div>
                        </a>
                    </Link>
                </Carousel.Item>
            );
        }
    });

    return (
        <div className='hero' key='hero'>
            <Carousel>{heroItems}</Carousel>
        </div>
    );
};

export default Hero;
