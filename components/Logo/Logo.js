import './Logo.scss';
import Link from 'next/link';

const Logo = props => {
    const language = props.language;
    const logoLink = language ? language : '';
    const logoUrl = props.site.logo.url;
    const logoAlt = props.site.name + "'s  logo";

    return (
        <div className='site-logo container'>
            <Link href={`/${logoLink}`} as={`/${logoLink}`}>
                <a>
                    <img className='site-logo__image' src={logoUrl} alt={logoAlt} />
                </a>
            </Link>
        </div>
    );
};

export default Logo;
