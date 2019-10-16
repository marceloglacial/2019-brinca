import './Logo.scss';
import siteConfig from '../../components/Global/Global';

const Logo = props => {
    const language = props.language;
    const link = language ? language : '';
    return (
        <div className='site-logo container'>
            <a href={`/${link}`}>
                <img className='site-logo__image' src={siteConfig.logo} alt={`${siteConfig.title} - ${siteConfig.description}`} />
            </a>
        </div>
    );
};

export default Logo;
