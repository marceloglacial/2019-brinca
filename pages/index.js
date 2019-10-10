import Head from 'next/head';
import Layout from '../components/Layout/Layout';
import Hero from '../components/Hero/Hero';
import fetch from 'isomorphic-unfetch';
import siteConfig from '../components/Global/Global';
import Banner from '../components/Banner/Banner';

const Home = props => (
    <>
        <Head>
            <title>
                {siteConfig.title} - {siteConfig.description}
            </title>
        </Head>
        <Layout data={props.menu} footer={props.footer}>
            <Hero data={props.posts} />
            <Banner data={props.banner} />
        </Layout>
    </>
);

Home.getInitialProps = async function() {
    // Posts
    const resPosts = await fetch(`${siteConfig.endpoints.posts}?categories=${siteConfig.highlights.id}&order=desc`);
    const jsonPosts = await resPosts.json();

    // Banner
    const resBanner = await fetch(`${siteConfig.endpoints.posts}/${siteConfig.banner.id}`);
    const jsonBanner = await resBanner.json();

    // Menus
    const resMenu = await fetch(`${siteConfig.endpoints.posts}/${siteConfig.menu.id}`);
    const jsonMenu = await resMenu.json();

    // Footer
    const resFooter = await fetch(`${siteConfig.endpoints.posts}/${siteConfig.footer.id}`);
    const jsonFooter = await resFooter.json();

    return {
        menu: jsonMenu,
        posts: jsonPosts,
        banner: jsonBanner,
        footer: jsonFooter
    };
};

export default Home;
