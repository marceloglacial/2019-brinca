import React from 'react';
import HeadComponent from '../components/Head/Head';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Footer from '../components/Footer/Footer';
import Subscribe from '../components/Subscribe/Subscribe';
import fetch from 'isomorphic-unfetch';

IndexPage.getInitialProps = async function() {
    const siteDomain = `https://public-api.wordpress.com`
    const siteURl = `brincanada.wordpress.com`
    const siteAPIv1 = `${siteDomain}/rest/v1/sites/${siteURl}`
    const siteAPIv2 = `${siteDomain}/wp/v2/sites/${siteURl}`

    const siteRes = await fetch(siteAPIv1);
    const siteData = await siteRes.json();

    const pagesRes = await fetch(`${siteAPIv2}/pages/`);
    const pagesData = await pagesRes.json();

    const catRes = await fetch(`${siteAPIv2}/categories/`);
    const catData = await catRes.json();

    const postsRes = await fetch(`${siteAPIv2}/posts/`);
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
            <Hero postsData={props.postsData} catData={props.catData}  />
            <Subscribe pagesData={props.pagesData} />
            <Footer pagesData={props.pagesData} />
        </>
    );
}

export default IndexPage;
