import Head from 'next/head';
import Layout from '../components/Layout/Layout';
import Hero from '../components/Hero/Hero';
import fetch from 'isomorphic-unfetch';
import endpoints from '../endpoints';

const Home = props => (
    <>
        <Head>
            <title>Brinca - Descrição do site</title>
        </Head>
        <Layout data={props.menu}>
            <Hero data={props.posts} />
        </Layout>
    </>
);
Home.getInitialProps = async function() {
    // Posts
    const resPosts = await fetch(`${endpoints.posts}?categories=2366`);
    const jsonPosts = await resPosts.json();

    // Menus
    const resMenu = await fetch(endpoints.menu);
    const jsonMenu = await resMenu.json();
    return {
        menu: jsonMenu,
        posts: jsonPosts
    };
};

export default Home;

// TODO
// https://alligator.io/js/array-find-method/
