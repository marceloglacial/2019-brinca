import fetch from 'isomorphic-unfetch';
import siteConfig from '../../components/Global/Global';
import Single from '../../components/Single/Single';

const Post = props => <Single {...props} />;

Post.getInitialProps = async function(context) {
    // Posts
    const { id } = context.query;
    const res = await fetch(`${siteConfig.endpoints.posts}?slug=${id}`);
    const json = await res.json();

    // Events
    const resEvents = await fetch(`${siteConfig.endpoints.posts}?categories=${siteConfig.english.events.id}&order=desc`);
    const jsonEvents = await resEvents.json();

    // Menus
    const resMenu = await fetch(`${siteConfig.endpoints.posts}/${siteConfig.english.menu.id}`);
    const jsonMenu = await resMenu.json();

    // Footer
    const resFooter = await fetch(`${siteConfig.endpoints.posts}/${siteConfig.english.footer.id}`);
    const jsonFooter = await resFooter.json();

    return {
        menu: jsonMenu,
        post: json[0],
        events: jsonEvents,
        footer: jsonFooter,
        language: 'english'
    };
};

export default Post;
