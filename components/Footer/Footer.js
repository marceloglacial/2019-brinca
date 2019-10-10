import siteConfig from '../../components/Global/Global';
import './Footer.scss';

const Footer = props => {
    const { title } = siteConfig;
    const year = new Date().getFullYear();
    const footerData = props.footer;

    const footerContent = <div className={`site-footer-nav__items container`} dangerouslySetInnerHTML={{ __html: footerData.content.rendered }} />;

    return (
        <footer>
            <section className='site-footer-nav'>{footerContent}</section>
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
