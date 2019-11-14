import React from 'react';
import './Hero.scss';
import Link from 'next/link';
import Carousel from 'react-bootstrap/Carousel';

const Hero = props => {
    const data = props.data;
    const language = props.language ? props.language : '';

    const slildes = (
        <Carousel>
            {data.map(post => (
                <Carousel.Item key={post.slug}>
                    <Link href={`${language}/[id]`} as={`${language}/${post.slug}`}>
                        <a className='slide__link'>
                            <img className='slide__image' src={post.jetpack_featured_media_url} alt='' />
                            <Carousel.Caption>
                                <h3>
                                    <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                                </h3>
                            </Carousel.Caption>
                        </a>
                    </Link>
                </Carousel.Item>
            ))}
        </Carousel>
    );

    return <div className='site-hero'>{slildes}</div>;
};

export default Hero;
