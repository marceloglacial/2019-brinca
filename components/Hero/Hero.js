import React from 'react';
import './Hero.scss';
import Link from 'next/link';
import Carousel from 'react-bootstrap/Carousel';

const Hero = props => {
    const data = props.data.posts;
    const language = props.language ? props.language : '';
    const slildes = (
        <Carousel>
            {data.map(post => (
                <Carousel.Item key={post.slug}>
                    <Link href={`${language}/[id]`} as={`${language}/${post.slug}`}>
                        <a className='slide__link'>
                            <img className='slide__image' src={post.featured_image} alt='' />
                            <Carousel.Caption>
                                <h3 className='slide__title'>
                                    <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
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
