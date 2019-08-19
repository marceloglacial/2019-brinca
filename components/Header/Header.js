import '../../node_modules/bootstrap/scss/bootstrap.scss';
import './Header.scss';
import Link from 'next/link';

const Header = props => {
    // Display Menu Item
    const menuItems = props.navMenuData;

    // Get Menu - Top
    const navID = menuItems.find(function(element) {
        return element.slug === 'menu-topo';
    });

    // Get Telephone
    const navTelephone = menuItems.find(function(element) {
        return element.slug === 'telephone';
    });

    // Get Language
    const navLanguage = menuItems.find(function(element) {
        return element.slug === 'language';
    });

    const navMenuItem = menuItems.map(navMenuItem => {
        const { content, id } = navMenuItem;

        if (id === navID.id) {
            return <div className='menu-top' dangerouslySetInnerHTML={{ __html: content.rendered }} key={id} />;
        }

        if (id === navTelephone.id) {
            return <div className='menu-telephone' dangerouslySetInnerHTML={{ __html: content.rendered }} key={id} />;
        }
        if (id === navLanguage.id) {
            return <div className='menu-language' dangerouslySetInnerHTML={{ __html: content.rendered }} key={id} />;
        }
    });

    return (
        <>
            <header className='site-header container'>
                <div className='site-info'>
                    <h1 className='site-info__title'>Brinca</h1>
                    <p className='site-info__description'>Brazil-Canada Community Association's website</p>
                </div>
                <div className='site-logo'>
                    <Link href='/'>
                        <a className='site-info__link'>
                            <img src='https://brincaottawa.files.wordpress.com/2019/08/logofinal-01402x.png' alt='logo' className='site-logo__img' />
                        </a>
                    </Link>
                </div>
                <div className='site-header__menu'>{navMenuItem}</div>
            </header>
        </>
    );
};

export default Header;
