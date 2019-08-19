import HeadComponent from '../components/Head/Head';
import Header from '../components/Header/Header';
import fetch from 'isomorphic-unfetch';

IndexPage.getInitialProps = async function() {
    const siteRed = await fetch('https://public-api.wordpress.com/rest/v1/sites/brincanada.wordpress.com/');
    const siteData = await siteRed.json();

    const navMenuRes = await fetch('https://public-api.wordpress.com/wp/v2/sites/brincanada.wordpress.com/pages');
    const navMenuData = await navMenuRes.json();

    return {
        siteData,
        navMenuData,
    };
};

function IndexPage(props) {
    return (
        <>
            <HeadComponent siteData={props.siteData} />
            <Header navMenuData={props.navMenuData} />
        </>
    );
}

export default IndexPage;