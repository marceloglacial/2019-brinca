import Head from 'next/head';
import Layout from '../components/Layout/Layout';
import Hero from '../components/Hero/Hero';
import fetch from 'isomorphic-unfetch';
import endpoints from '../endpoints';

const Home = props => (
    <>
        <Head>
            <title>Home</title>
        </Head>
        <Layout data={props.menu}>
            <Hero />
        </Layout>
    </>
);
Home.getInitialProps = async function() {
    // Posts
    // const { id } = context.query;
    // const res = await fetch(`${endpoints.posts}?slug=${id}`);
    // const json = await res.json();

    // Menus
    const resMenu = await fetch(endpoints.menu);
    const jsonMenu = await resMenu.json();
    return { menu: jsonMenu };
};

export default Home;
