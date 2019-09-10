import React from 'react';
import './Hero.scss';
import Link from 'next/link';
import { Carousel } from 'react-responsive-carousel';
// Reference: https://www.npmjs.com/package/react-responsive-carousel

const Hero = () => (
    <div className='site-hero'>
        <Carousel showThumbs={false} showStatus={false}>
            <div className='slide'>
                <Link href='/'>
                    <a className='slide__link'>
                        <img className='sile__image' src='https://brincanada.files.wordpress.com/2019/08/67198645_2280707095513327_1183111443910754304_o.jpg' />
                        <div className='slide__legend container'>
                            <h1 className='slide__title'>Slide Title</h1>
                            <p className='slide__description'>Slide Description</p>
                        </div>
                    </a>
                </Link>
            </div>
            <div className='slide'>
                <Link href='/'>
                    <a className='slide__link'>
                        <img className='sile__image' src='https://brincanada.files.wordpress.com/2019/08/67198645_2280707095513327_1183111443910754304_o.jpg' />
                        <div className='slide__legend container'>
                            <h1 className='slide__title'>Slide Title</h1>
                            <p className='slide__description'>Slide Description</p>
                        </div>
                    </a>
                </Link>
            </div>
            <div className='slide'>
                <Link href='/'>
                    <a className='slide__link'>
                        <img className='sile__image' src='https://brincanada.files.wordpress.com/2019/08/67198645_2280707095513327_1183111443910754304_o.jpg' />
                        <div className='slide__legend container'>
                            <h1 className='slide__title'>Slide Title</h1>
                            <p className='slide__description'>Slide Description</p>
                        </div>
                    </a>
                </Link>
            </div>
        </Carousel>
    </div>
);

export default Hero;
