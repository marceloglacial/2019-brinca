import siteConfig from '../components/Global/Global';
import Home from '../components/Home/Home';
import api from '../api/api';
import { fecthApi } from '../helpers/helpers';

const Index = props => <Home {...props} />;

Index.getInitialProps = async function() {
    const jsonInfo = await fecthApi(api.siteInfo);
    const jsonHero = await fecthApi(api.hero.portugues);
    const jsonIcons = await fecthApi(api.icon.portugues);
    const jsonMenu = await fecthApi(api.nav.portugues);
    const jsonFooter = await fecthApi(api.footer.portugues);

    return {
        site: jsonInfo,
        menu: jsonMenu,
        posts: jsonHero,
        banner: jsonIcons,
        footer: jsonFooter
    };
};

export default Index;
