import siteConfig from '../../components/Global/Global';
import Home from '../../components/Home/Home';
import api from '../../api/api';
import { fecthApi } from '../../helpers/helpers';

const Francais = props => <Home {...props} />;

Francais.getInitialProps = async function() {
    const jsonInfo = await fecthApi(api.siteInfo);
    const jsonHero = await fecthApi(api.hero.francais);
    const jsonIcons = await fecthApi(api.icon.francais);
    const jsonMenu = await fecthApi(api.nav.francais);
    const jsonFooter = await fecthApi(`${api.posts}/${siteConfig.footer.id}`);

    return {
        site: jsonInfo,
        menu: jsonMenu,
        posts: jsonHero,
        banner: jsonIcons,
        footer: jsonFooter,
        language: 'francais'
    };
};

export default Francais;
