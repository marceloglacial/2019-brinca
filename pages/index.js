import fetch from 'isomorphic-unfetch';
import siteConfig from '../components/Global/Global';
import Home from '../components/Home/Home';

const Index = props => <Home {...props} />;

Index.getInitialProps = async function() {
    // Posts
    const resPosts = await fetch(`${siteConfig.endpoints.posts}?categories=${siteConfig.highlights.id}&order=desc`);
    const jsonPosts = await resPosts.json();

    // Banner
    const resBanner = await fetch(`${siteConfig.endpoints.posts}/${siteConfig.banner.id}`);
    const jsonBanner = await resBanner.json();

    // Menus
    const resMenu = await fetch(`${siteConfig.endpoints.posts}/${siteConfig.menu.id}`);
    const jsonMenu = await resMenu.json();

    // Footer
    const resFooter = await fetch(`${siteConfig.endpoints.posts}/${siteConfig.footer.id}`);
    const jsonFooter = await resFooter.json();

    return {
        menu: jsonMenu,
        posts: jsonPosts,
        banner: jsonBanner,
        footer: jsonFooter
    };
};

export default Index;
