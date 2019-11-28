import siteConfig from '../../components/Global/Global';
import Link from 'next/link';
import './Footer.scss';

const Footer = props => {
    const { title } = siteConfig;
    const year = new Date().getFullYear();
    const language = props.language ? props.language + '/' : '';

    // Get Links a
    const textContent = props.footer.content.split('\n').filter(function(e) {
        return e;
    });
    const matchText = expression => {
        const textMatch = textContent.map(item => {
            const result = item.match(expression);
            return result[1];
        });
        return textMatch;
    };

    let arrayTest = [[], []];

    console.log(matchText('<a href="(.*)">')[1]);

    arrayTest[0].push(matchText('">(.*)</a>')[0]);
    arrayTest[1].push(matchText('">(.*)</a>')[1]);
    arrayTest[0].push(matchText('<a href="(.*)">')[0]);
    arrayTest[1].push(matchText('<a href="(.*)">')[1]);

    const footerItems = (
        <>
            {arrayTest.map(item => {
                const isExternal = item[1].includes('http', 'www', '.com');

                if (isExternal) {
                    return (
                        <li key={item[1]}>
                            <a href={item[1]} target='_blank' dangerouslySetInnerHTML={{ __html: item[0] }} />
                        </li>
                    );
                }

                return (
                    <li key={item[1]}>
                        <Link href={`${language}[id]`} as={`${language}${item[1]}`}>
                            <a dangerouslySetInnerHTML={{ __html: item[0] }} />
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
