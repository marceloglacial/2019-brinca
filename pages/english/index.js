import Head from 'next/head';
import Layout from '../../components/Layout/Layout';
import Hero from '../../components/Hero/Hero';
import fetch from 'isomorphic-unfetch';
import siteConfig from '../../components/Global/Global';
import Banner from '../../components/Banner/Banner';

const language = 'english';

const English = props => {
    return (
        <>
            <Head>
                <title>
                    {siteConfig.title} - {siteConfig.description}
                </title>
            </Head>
            <Layout data={props.menu} footer={props.footer} language={language}>
                <Hero data={props.posts} language={language} />
                <Banner data={props.banner} language={language} />
            </Layout>
        </>
    );
};

English.getInitialProps = async function() {
    // Posts
    const resPosts = await fetch(`${siteConfig.endpoints.posts}?categories=${siteConfig.english.highlights.id}&order=desc`);
    const jsonPosts = await resPosts.json();

    // Banner
    const resBanner = await fetch(`${siteConfig.endpoints.posts}/${siteConfig.english.banner.id}`);
    const jsonBanner = await resBanner.json();

    // Menus
    const resMenu = await fetch(`${siteConfig.endpoints.posts}/${siteConfig.english.menu.id}`);
    const jsonMenu = await resMenu.json();

    // Footer
    const resFooter = await fetch(`${siteConfig.endpoints.posts}/${siteConfig.english.footer.id}`);
    const jsonFooter = await resFooter.json();

    return {
        menu: jsonMenu,
        posts: jsonPosts,
        banner: jsonBanner,
        footer: jsonFooter
    };
};

export default English;
