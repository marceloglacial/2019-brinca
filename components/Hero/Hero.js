import React from 'react';
import './Hero.scss';
import Link from 'next/link';
import { Carousel } from 'react-responsive-carousel';
// Reference: https://www.npmjs.com/package/react-responsive-carousel

const Hero = () => (
    <div className='site-hero'>
        {/* <Link href='/'>
            <a>
                <h1>Site Title</h1>
            </a>
        </Link> */}
        <Carousel showThumbs={false} showStatus={false}>
            <div className='slide'>
                <img src='https://brincanada.files.wordpress.com/2019/08/67198645_2280707095513327_1183111443910754304_o.jpg' />
                <div className='legend'>Legend 1</div>
            </div>
            <div className='slide'>
                <img src='https://brincanada.files.wordpress.com/2019/08/67198645_2280707095513327_1183111443910754304_o.jpg' />
                <div className='legend'>Legend 1</div>
            </div>
            <div className='slide'>
                <img src='https://brincanada.files.wordpress.com/2019/08/67198645_2280707095513327_1183111443910754304_o.jpg' />
                <div className='legend'>Legend 1</div>
            </div>
        </Carousel>
    </div>
);

export default Hero;
