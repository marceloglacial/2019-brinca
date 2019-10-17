import React from 'react';
import './Hero.scss';
import Link from 'next/link';
import { Carousel } from 'react-responsive-carousel';
// Reference: https://www.npmjs.com/package/react-responsive-carousel

const Hero = props => {
    const data = props.data;

    const slildes = (
        <Carousel showThumbs={false} showStatus={false} autoPlay={true} infiniteLoop={true}>
            {data.map(post => (
                <div className='slide' key={post.slug}>
                    <Link href='[id]' as={`${post.slug}`}>
                        <a className='slide__link'>
                            <img className='sile__image' src={post.jetpack_featured_media_url} alt='' />
                            <div className='slide__legend container'>
                                <h1 className='slide__title'>{post.title.rendered}</h1>
                            </div>
                        </a>
                    </Link>
                </div>
            ))}
        </Carousel>
    );

    return <div className='site-hero'>{slildes}</div>;
};

export default Hero;
