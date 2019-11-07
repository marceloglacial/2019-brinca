import fetch from 'isomorphic-unfetch';
import siteConfig from '../../components/Global/Global';
import Home from '../../components/Home/Home';

const Francais = props => <Home {...props} />;

Francais.getInitialProps = async function() {
    // Posts
    const resPosts = await fetch(`${siteConfig.endpoints.posts}?categories=${siteConfig.francais.highlights.id}&order=desc`);
    const jsonPosts = await resPosts.json();

    // Banner
    const resBanner = await fetch(`${siteConfig.endpoints.posts}/${siteConfig.francais.banner.id}`);
    const jsonBanner = await resBanner.json();

    // Menus
    const resMenu = await fetch(`${siteConfig.endpoints.posts}/${siteConfig.francais.menu.id}`);
    const jsonMenu = await resMenu.json();

    // Footer
    const resFooter = await fetch(`${siteConfig.endpoints.posts}/${siteConfig.francais.footer.id}`);
    const jsonFooter = await resFooter.json();

    return {
        menu: jsonMenu,
        posts: jsonPosts,
        banner: jsonBanner,
        footer: jsonFooter,
        language: 'francais'
    };
};

export default Francais;
