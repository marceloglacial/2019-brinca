import React from 'react';
import HeadComponent from '../components/Head/Head';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Footer from '../components/Footer/Footer';
import fetch from 'isomorphic-unfetch';

IndexPage.getInitialProps = async function() {
    const siteURl = `brincanada.wordpress.com`
    const siteAPIv1 = `https://public-api.wordpress.com/rest/v1/sites/${siteURl}`
    const siteAPIv2 = `https://public-api.wordpress.com/wp/v2/sites/${siteURl}`

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
            <Footer pagesData={props.pagesData} />
        </>
    );
}

export default IndexPage;
