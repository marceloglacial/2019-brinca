import fetch from 'isomorphic-unfetch';
import siteConfig from '../components/Global/Global';
import Single from '../components/Single/Single';
import api from '../api/api';
import { fecthApi } from '../helpers/helpers';

const Post = props => <Single {...props} />;

Post.getInitialProps = async function(context) {
    // Site Info
    const jsonInfo = await fecthApi(api.siteInfo);

    // Posts
    const { id } = context.query;
    const res = await fetch(`${siteConfig.api.v2}/posts/?slug=${id}`);
    const json = await res.json();

    // Events
    const resEvents = await fetch(`${siteConfig.api.v2}/posts/?categories=${siteConfig.events.id}&order=desc`);
    const jsonEvents = await resEvents.json();

    // Soon
    const resSoon = await fetch(`${siteConfig.api.v2}/posts/?categories=${siteConfig.soon.id}&order=desc`);
    const jsonSoon = await resSoon.json();

    // Menus
    const resMenu = await fetch(`${siteConfig.api.v2}/posts/${siteConfig.menu.id}`);
    const jsonMenu = await resMenu.json();

    // Footer
    const resFooter = await fetch(`${siteConfig.api.v2}/posts/${siteConfig.footer.id}`);
    const jsonFooter = await resFooter.json();

    return {
        site: jsonInfo,
        menu: jsonMenu,
        post: json[0],
        events: jsonEvents,
        soon: jsonSoon,
        footer: jsonFooter
    };
};

export default Post;
