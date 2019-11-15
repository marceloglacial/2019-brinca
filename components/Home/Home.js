import Head from 'next/head';
import Layout from '../Layout/Layout';
import Hero from '../Hero/Hero';
import Banner from '../Banner/Banner';

const Home = props => {
    const { name: siteName, description: siteDescription } = props.site;

    return (
        <>
            <Head>
                <title>
                    {siteName} - {siteDescription}
                </title>
                <meta name='Description' content={`${siteName} - ${siteDescription}`} />
            </Head>
            <Layout data={props.menu} footer={props.footer} language={props.language} {...props}>
                <Hero data={props.posts} language={props.language} />
                <Banner data={props.banner} language={props.language} />
            </Layout>
        </>
    );
};

export default Home;
