import Head from 'next/head';
import Layout from '../components/Layout/Layout';
import Hero from '../components/Hero/Hero';
import fetch from 'isomorphic-unfetch';
import siteConfig from '../components/Global/Global';
import Rsvp from '../components/Rsvp/Rsvp';
import Button from '../components/Button/Button';
import Banner from '../components/Banner/Banner';

const Home = props => (
    <>
        <Head>
            <title>
                {siteConfig.title} - {siteConfig.description}
            </title>
        </Head>
        <Layout data={props.menu}>
            <Hero data={props.posts} />
            <Rsvp title='Agenda de Eventos' data={props.rsvp} items='3' fluid='no'>
                <div className='events__footer'>
                    <Button title='Ver Todos' link='agenda' />
                </div>
            </Rsvp>
            <Banner data={props.banner} />
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

    // Rsvp
    const resRsvp = await fetch(siteConfig.endpopints.rsvp);
    const jsonRsvp = await resRsvp.json();

    // Banner 
    const resBanner = await fetch(siteConfig.endpopints.banner);
    const jsonBanner = await resBanner.json();

    return {
        menu: jsonMenu,
        posts: jsonPosts,
        rsvp: jsonRsvp,
        banner: jsonBanner
    };
};

export default Home;
