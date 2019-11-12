import siteConfig from '../Global/Global';
import Head from 'next/head';
import Layout from '../Layout/Layout';
import Cards from '../Cards/Cards';
import ContactForm from '../ContactForm/ContactForm';
import Subscription from '../Subscription/Subscription';

const ExtraContent = props => {
    const { data, language } = props;
    const pageSlug = props.post.slug;
    const languageSelected = language ? language : 'portuguese';

    // Contac Form
    if (pageSlug === 'fale-conosco' || pageSlug === 'contact-us' || pageSlug === 'contactez-nous') {
        return <ContactForm email={siteConfig.email} language={language} />;
    }

    // Subscription form
    if (pageSlug === 'associe-se' || pageSlug === 'devenir-membre' || pageSlug === 'become-a-member') {
        return <Subscription />;
    }

    // Events Cards
    if (pageSlug === 'eventos' || pageSlug === 'events' || pageSlug === 'evenements') {
        // Soon Title
        const soonTitle = language => {
            let result;

            // TODO: Get real names usng jSON
            result = language === 'portuguese' ? 'Em Breve' : result;
            result = language === 'english' ? 'Soon' : result;
            result = language === 'francais' ? 'Bientôt' : result;

            return result;
        };
        const eventTitle = language => {
            let result;

            // TODO: Get real names usng jSON
            result = language === 'portuguese' ? 'Eventos recentes' : result;
            result = language === 'english' ? 'Recent Events' : result;
            result = language === 'francais' ? 'Événements récentsentôt' : result;

            return result;
        };

        // Get only soon posts
        const cardPost = props.events;
        const cardSoon = props.soon;

        return (
            <>
                <h3 className='events-card-title'>{soonTitle(languageSelected)}</h3>
                <Cards data={data} posts={cardSoon} />
                <h3 className='events-card-title'>{eventTitle(languageSelected)}</h3>
                <Cards data={data} posts={cardPost} />
            </>
        );
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
                        <ExtraContent {...props} />
                    </section>
                </article>
            </Layout>
        </>
    );
};

export default Single;
