import React from 'react';
import HeadComponent from '../components/Head/Head';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import fetch from 'isomorphic-unfetch';

IndexPage.getInitialProps = async function() {
    const siteRes = await fetch('https://public-api.wordpress.com/rest/v1/sites/brincanada.wordpress.com/');
    const siteData = await siteRes.json();

    const navMenuRes = await fetch('https://public-api.wordpress.com/wp/v2/sites/brincanada.wordpress.com/pages');
    const navMenuData = await navMenuRes.json();

    return {
        siteData,
        navMenuData
    };
};

function IndexPage(props) {
    return (
        <>
            <HeadComponent siteData={props.siteData} />
            <Header navMenuData={props.navMenuData} siteData={props.siteData} />
            <Footer navMenuData={props.navMenuData} />
        </>
    );
}

export default IndexPage;
