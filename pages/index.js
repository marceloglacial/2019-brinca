import React from 'react';
import HeadComponent from '../components/Head/Head';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Footer from '../components/Footer/Footer';
import fetch from 'isomorphic-unfetch';

IndexPage.getInitialProps = async function() {
    const siteRes = await fetch('https://public-api.wordpress.com/rest/v1/sites/brincanada.wordpress.com/');
    const siteData = await siteRes.json();

    const pagesRes = await fetch('https://public-api.wordpress.com/wp/v2/sites/brincanada.wordpress.com/pages/');
    const pagesData = await pagesRes.json();

    const catRes = await fetch('https://public-api.wordpress.com/wp/v2/sites/brincanada.wordpress.com/categories/');
    const catData = await catRes.json();

    const postsRes = await fetch('https://public-api.wordpress.com/wp/v2/sites/brincanada.wordpress.com/posts/');
    const postsData = await postsRes.json();

    return {
        siteData,
        pagesData,
        catData,
        postsData
    };
};

function IndexPage(props) {
    return (
        <>
            <HeadComponent siteData={props.siteData} />
            <Header pagesData={props.pagesData} siteData={props.siteData} />
            <Hero data={props.postsData} />
            <Footer pagesData={props.pagesData} />
        </>
    );
}

export default IndexPage;
