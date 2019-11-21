import siteConfig from '../../components/Global/Global';
import Home from '../../components/Home/Home';
import api from '../../api/api';
import { fecthApi } from '../../helpers/helpers';

const English = props => <Home {...props} />;

English.getInitialProps = async function() {
    const jsonInfo = await fecthApi(api.siteInfo);
    const jsonHero = await fecthApi(api.hero.english);
    const jsonIcons = await fecthApi(api.icon.english);
    const jsonMenu = await fecthApi(api.nav.english);
    const jsonFooter = await fecthApi(`${api.posts}/${siteConfig.footer.id}`);

    return {
        site: jsonInfo,
        menu: jsonMenu,
        posts: jsonHero,
        banner: jsonIcons,
        footer: jsonFooter,
        language: 'english'
    };
};

export default English;
