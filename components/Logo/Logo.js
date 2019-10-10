import Link from 'next/link';
import './Logo.scss';
import siteConfig from '../../components/Global/Global';

const Logo = () => (
    <div className='site-logo container'>
        <Link href='index' as={siteConfig.url}>
            <a>
                <img className='site-logo__image' src='https://brincanada.files.wordpress.com/2019/08/logo.png' alt={`${siteConfig.title} - ${siteConfig.description}`} />
            </a>
        </Link>
    </div>
);

export default Logo;
