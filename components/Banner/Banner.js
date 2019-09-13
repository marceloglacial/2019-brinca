import Link from 'next/link';
import './Banner.scss';
import Button from '../Button/Button';

const Banner = props => (
    <Link href='[id]' as={`${props.link}`}>
        <section className='banner'>
            <div className='banner__container container'>
                <div className='banner__info'>
                    <div className='banner__title'>
                        <h3 className='heading-title'>{props.title}</h3>
                    </div>
                    <div className='banner__description'>
                        <p>Sint cillum dolore excepteur commodo anim sunt voluptate anim id velit aliquip. Est veniam veniam sunt sunt fugiat consectetur. Est exercitation excepteur sint aute exercitation incididunt id dolor occaecat amet est eiusmod id voluptate. Veniam deserunt amet reprehenderit culpa commodo duis nostrud elit occaecat est commodo laboris. Pariatur consequat minim tempor elit id ea incididunt deserunt.</p>
                    </div>
                </div>
                <div className='banner__cta'>
                    <Button title='Cadastre-se' link='associe-se' />
                </div>
            </div>
        </section>
    </Link>
);

export default Banner;
