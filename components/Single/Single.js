import siteConfig from '../Global/Global';
import Head from 'next/head';
import Layout from '../Layout/Layout';
import Cards from '../Cards/Cards';
import ContactForm from '../ContactForm/ContactForm';
import Subscription from '../Subscription/Subscription';

const ExtraContent = props => {
    const data = props.data;
    const pageSlug = data.slug;

    if (pageSlug === 'fale-conosco') {
        return <ContactForm email={siteConfig.email} />;
    } else if (pageSlug === 'associe-se') {
        return <Subscription />;
    } else if (pageSlug === 'eventos') {
        return <Cards data={data} posts={props.events} />;
    } else {
        return <></>;
    }
};

const Single = props => {
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
                        <ExtraContent data={data} events={props.events} rsvp={props.rsvp} />
                    </section>
                </article>
            </Layout>
        </>
    );
};

export default Single;
