import Head from 'next/head';
import Layout from '../components/Layout/Layout';
import Hero from '../components/Hero/Hero';
import fetch from 'isomorphic-unfetch';
import siteConfig from '../components/Global/Global';

const Home = props => (
    <>
        <Head>
            <title>{siteConfig.title} - {siteConfig.description}</title>
        </Head>
        <Layout data={props.menu}>
            <Hero data={props.posts} />
        </Layout>
    </>
);
Home.getInitialProps = async function() {
    // Posts
    const resPosts = await fetch(`${siteConfig.endpopints.posts}?categories=${siteConfig.highlights.id}`);
    const jsonPosts = await resPosts.json();

    // Menus
    const resMenu = await fetch(siteConfig.endpopints.menu);
    const jsonMenu = await resMenu.json();
    return {
        menu: jsonMenu,
        posts: jsonPosts
    };
};

export default Home;
