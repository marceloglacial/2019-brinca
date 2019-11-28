import siteConfig from '../../components/Global/Global';
import Link from 'next/link';
import './Footer.scss';

const Footer = props => {
    const { title } = siteConfig;
    const year = new Date().getFullYear();
    const language = props.language ? props.language : '';
    const footerData = {
        portugues: [
            {
                text: 'Associe-se',
                link: 'associe-se'
            },
            {
                text: 'Facebook',
                link: 'http://facebook.com'
            }
        ]
    };

    const footerItems = (
        <>
            {footerData.portugues.map(item => {
                const isExternal = item.link.includes('http', 'www', '.com');

                if (isExternal) {
                    return (
                        <li key={item.link}>
                            <a href={item.link} target='_blank'>
                                {item.text}
                            </a>
                        </li>
                    );
                }

                return (
                    <li key={item.link}>
                        <Link href={`${language}/[id]`} as={`${language}/${item.link}`}>
                            <a>{item.text}</a>
                        </Link>
                    </li>
                );
            })}
        </>
    );

    return (
        <footer>
            <section className='site-footer-nav'>
                <ul className='site-footer-nav__items'>{footerItems}</ul>
            </section>
            <section className='site-footer-copyrights'>
                <p>
                    Copyrights {title} - {year}
                </p>
            </section>
            <section className='site-footer-developer'>
                <p>
                    <a href='http://marceloglacial.com'>Developed by Marcelo Glacial</a>
                </p>
            </section>
        </footer>
    );
};

export default Footer;
