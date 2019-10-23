import Head from 'next/head';
import Layout from '../Layout/Layout';
import Hero from '../Hero/Hero';
import siteConfig from '../Global/Global';
import Banner from '../Banner/Banner';

const Home = props => (
    <>
        <Head>
            <title>
                {siteConfig.title} - {siteConfig.description}
            </title>
            <meta name='Description' content={`${siteConfig.title} - ${siteConfig.description}`} />
            <meta name='robots' content='index, follow' />
        </Head>
        <Layout data={props.menu} footer={props.footer} language={props.language}>
            {/* <Hero data={props.posts} language={props.language} /> */}
            <Banner data={props.banner} language={props.language} />
        </Layout>
    </>
);

export default Home;
