import Head from 'next/head';
import Layout from '../components/Layout/Layout';
import Hero from '../components/Hero/Hero';
import fetch from 'isomorphic-unfetch';
import siteConfig from '../components/Global/Global';
import Rsvp from '../components/Rsvp/Rsvp';
import Button from '../components/Button/Button';

const Home = props => (
    <>
        <Head>
            <title>
                {siteConfig.title} - {siteConfig.description}
            </title>
        </Head>
        <Layout data={props.menu}>
            <Hero data={props.posts} />
            <div className='container'>
                <Rsvp title='Agenda de Eventos' data={props.rsvp} items='3'>
                    <div className='events__footer'>
                        <Button title='Ver Todos' link='agenda' />
                    </div>
                </Rsvp>
            </div>
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

    return {
        menu: jsonMenu,
        posts: jsonPosts,
        rsvp: jsonRsvp
    };
};

export default Home;
