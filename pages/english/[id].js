import siteConfig from '../../components/Global/Global';
import Head from 'next/head';
import Layout from '../../components/Layout/Layout';
import fetch from 'isomorphic-unfetch';
import Cards from '../../components/Cards/Cards';
import ContactForm from '../../components/ContactForm/ContactForm';
import Subscription from '../../components/Subscription/Subscription';

const ExtraContent = props => {
    const data = props.data;
    const pageSlug = data.slug;

    if (pageSlug === 'contact-us') {
        return <ContactForm email={siteConfig.email} />;
    } else if (pageSlug === 'become-a-member') {
        return <Subscription />;
    } else if (pageSlug === 'events') {
        return <Cards data={data} posts={props.events} />;
    } else {
        return <></>;
    }
};

const Post = props => {
    const data = props.post;
    return (
        <>
            <Head>
                <title>Brinca - {data.title.rendered}</title>
            </Head>
            <Layout data={props.menu} footer={props.footer} language={`english`}>
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

Post.getInitialProps = async function(context) {
    // Posts
    const { id } = context.query;
    const res = await fetch(`${siteConfig.endpoints.posts}?slug=${id}`);
    const json = await res.json();

    // Events
    const resEvents = await fetch(`${siteConfig.endpoints.posts}?categories=${siteConfig.english.events.id}&order=desc`);
    const jsonEvents = await resEvents.json();

    // Menus
    const resMenu = await fetch(`${siteConfig.endpoints.posts}/${siteConfig.english.menu.id}`);
    const jsonMenu = await resMenu.json();

    // Footer
    const resFooter = await fetch(`${siteConfig.endpoints.posts}/${siteConfig.english.footer.id}`);
    const jsonFooter = await resFooter.json();

    return {
        menu: jsonMenu,
        post: json[0],
        events: jsonEvents,
        footer: jsonFooter
    };
};

export default Post;
