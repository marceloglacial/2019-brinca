import siteConfig from '../Global/Global';
import Head from 'next/head';
import Layout from '../Layout/Layout';
import Cards from '../Cards/Cards';
import ContactForm from '../ContactForm/ContactForm';
import Subscription from '../Subscription/Subscription';

const ExtraContent = props => {
    const { data, language } = props;
    const pageSlug = data.slug;

    if (pageSlug === 'fale-conosco' || pageSlug === 'contact-us' || pageSlug === 'contactez-nous') {
        return <ContactForm email={siteConfig.email} language={language} />;
    } else if (pageSlug === 'associe-se' || pageSlug === 'devenir-membre' || pageSlug === 'become-a-member') {
        return <Subscription />;
    } else if (pageSlug === 'eventos' || pageSlug === 'events' || pageSlug === 'evenements') {
        return <Cards data={data} posts={props.events} />;
    } else {
        return <></>;
    }
};

const Single = props => {
    const { language } = props;
    const data = props.post;

    return (
        <>
            <Head>
                <title>Brinca - {data.title.rendered}</title>
                <meta name='Description' content={`Brinca - ${data.title.rendered}`} />
            </Head>
            <Layout data={props.menu} footer={props.footer} language={props.language}>
                <article className={`article-container page-${data.slug}`}>
                    <header className='article-header'>
                        <h2 className='article-header__title container'>{data.title.rendered}</h2>
                    </header>
                    <section className='article-content container'>
                        <div className='article-content__text' dangerouslySetInnerHTML={{ __html: data.content.rendered }} />
                        <ExtraContent data={data} events={props.events} language={language} />
                    </section>
                </article>
            </Layout>
        </>
    );
};

export default Single;
