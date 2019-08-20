import '../../node_modules/bootstrap/scss/bootstrap.scss';
import './Header.scss';
import Link from 'next/link';

const Header = props => {
    // Get data
    const menuItems = props.navMenuData;
    const siteItems = props.siteData;
    const { siteName, siteDescription } = siteItems;

    // Get Menu - Top
    const navID = menuItems.find(function(element) {
        return element.slug === 'menu-topo';
    });

    // Get Logo
    const navLogo = menuItems.find(function(element) {
        return element.slug === 'menu-logo';
    });

    // Get Telephone
    const navTelephone = menuItems.find(function(element) {
        return element.slug === 'telephone';
    });

    // Get Language
    const navLanguage = menuItems.find(function(element) {
        return element.slug === 'language';
    });

    // Display items
    const navMenuItem = menuItems.map(navMenuItem => {
        const { content, id } = navMenuItem;

        if (id === navLogo.id) {
            return (
                <div className='site-logo' key='site-logo'>
                    <Link href='/'>
                        <a className='site-info__link'>
                            <div className='site-logo__img' dangerouslySetInnerHTML={{ __html: content.rendered }} key={id} />
                        </a>
                    </Link>
                </div>
            );
        }

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
                    <h1 className='site-info__title'>{siteName}</h1>
                    <p className='site-info__description'>{siteDescription}</p>
                </div>
                <div className='site-header__menu'>{navMenuItem}</div>
            </header>
        </>
    );
};

export default Header;
