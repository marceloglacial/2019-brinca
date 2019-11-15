import siteConfig from '../components/Global/Global';
import Home from '../components/Home/Home';
import api from '../api/api';
import { fecthApi } from '../helpers/helpers';

const Index = props => <Home {...props} />;

Index.getInitialProps = async function() {
    const jsonInfo = await fecthApi(api.siteInfo);
    const jsonHero = await fecthApi(api.heropt);
    const jsonIcons = await fecthApi(api.iconhomept);
    const jsonMenu = await fecthApi(`${api.posts}/${siteConfig.menu.id}`);
    const jsonFooter = await fecthApi(`${api.posts}/${siteConfig.footer.id}`);

    return {
        site: jsonInfo,
        menu: jsonMenu,
        posts: jsonHero,
        banner: jsonIcons,
        footer: jsonFooter
    };
};

export default Index;
