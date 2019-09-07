import Link from 'next/link';
import './Logo.scss';
import siteConfig from '../../global/global';

const Logo = () => (
    <div className='site-logo container'>
        <Link href='index' as={siteConfig.url}>
            <a>
                <img className='site-logo__image' src='https://brincanada.files.wordpress.com/2019/08/logo.png' alt='Site logo' />
            </a>
        </Link>
    </div>
);

export default Logo;
