import './Nav.scss';
import Head from 'next/head';
import Link from 'next/link';
import LanguagePicker from '../LanguagePicker/LanguagePicker';
import { useState } from 'react';

const Nav = props => {
    const language = props.language ? props.language : '';
    const languageNav = language === '' ? 'portugues' : language;
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    const { icon } = props.site;

    const navitensContent = {
        portugues: [
            ['Quem Somos', 'quem-somos'],
            ['Associe-se', 'associe-se'],
            ['Eventos', 'eventos'],
            ['Fale Conosco', 'fale-conosco']
        ],
        english: [
            ['Who are we', 'who-we-are'],
            ['Become a member', 'become-a-member'],
            ['Events', 'events'],
            ['Contact Us', 'contact-us']
        ],
        francais: [
            ['Qui nous sommes', 'qui-nous-sommes'],
            ['Devenir membre', 'devenir-membre'],
            ['Événements', 'evenements'],
            ['Contactez-nous', 'contactez-nous']
        ]
    };

    const navItens = (
        <>
            {navitensContent[languageNav].map(navItensItem => (
                <li key={navItensItem[1]}>
                    <Link href={`${language}/[id]`} as={`${language}/${navItensItem[1]}`}>
                        <a className='item'>{navItensItem[0]}</a>
                    </Link>
                </li>
            ))}
        </>
    );

    const navItensContainer = (
        <div className={`site-nav--header__items container ${isOpen ? 'is-open' : ''}`}>
            <div className='site-nav--header__items_container'>
                <ul>{navItens}</ul>
            </div>
            <LanguagePicker {...props} />
        </div>
    );

    return (
        <>
            <Head>
                <meta name='robots' content='index, follow' />
                <link rel='shortcut icon' type='image/x-icon' href={icon.img} />
            </Head>
            <nav className={`site-nav site-nav--header`}>
                <button name='mobile-menu' className={`site-nav site-nav-button ${isOpen ? 'is-open' : ''}`} onClick={toggleMenu}>
                    <span>Menu</span>
                </button>
                {navItensContainer}
            </nav>
        </>
    );
};

export default Nav;
