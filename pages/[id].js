import siteConfig from '../components/Global/Global';
import Head from 'next/head';
import Layout from '../components/Layout/Layout';
import fetch from 'isomorphic-unfetch';
import Cards from '../components/Cards/Cards';
import ContactForm from '../components/ContactForm/ContactForm';
import Subscription from '../components/Subscription/Subscription';
import Rsvp from '../components/Rsvp/Rsvp';

const ExtraContent = props => {
    const data = props.data;
    const pageSlug = data.slug;

    if (pageSlug === 'fale-conosco') {
        return <ContactForm />;
    } else if (pageSlug === 'associe-se') {
        return <Subscription />;
    } else if (pageSlug === 'eventos') {
        return <Cards data={data} posts={props.events} />;
    } else if (pageSlug === 'agenda') {
        return <Rsvp data={props.rsvp} />;
    } else {
        return <></>;
    }
};

const Post = props => {
    const data = props.post;
    const date = new Date(data.date).toLocaleDateString('en-US');
    const categories = data.categories;
    const category = categories.find(category => category.toString().startsWith('193774'));
    let showDate;

    if (category == '193774') {
        showDate = <p className='container'>{date}</p>;
    }

    return (
        <>
            <Head>
                <title>Brinca - {data.title.rendered}</title>
            </Head>
            <Layout data={props.menu}>
                <article className={`article-container page-${data.slug}`}>
                    <header className='article-header'>
                        <h2 className='article-header__title container'>{data.title.rendered}</h2>
                        {showDate}
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

Post.getInitialProps = async function(context) {
    // Posts
    const { id } = context.query;
    const res = await fetch(`${siteConfig.endpopints.posts}?slug=${id}`);
    const json = await res.json();

    // Events
    const resEvents = await fetch(`${siteConfig.endpopints.posts}?categories=${siteConfig.events.id}`);
    const jsonEvents = await resEvents.json();

    // Menus
    const resMenu = await fetch(siteConfig.endpopints.menu);
    const jsonMenu = await resMenu.json();

    // Rsvp
    const resRsvp = await fetch(siteConfig.endpopints.rsvp);
    const jsonRsvp = await resRsvp.json();

    return {
        menu: jsonMenu,
        post: json[0],
        events: jsonEvents,
        rsvp: jsonRsvp
    };
};

export default Post;
