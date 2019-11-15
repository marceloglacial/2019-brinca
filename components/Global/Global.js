import fetch from 'isomorphic-unfetch';

const apiV1 = 'https://public-api.wordpress.com/rest/v1.1/sites/brincanada.wordpress.com';
const apiV2 = 'https://public-api.wordpress.com/wp/v2/sites/brincanada.wordpress.com';

const getData = async endpoint => {
    const res = await fetch(endpoint);
    const json = await res.json();

    const siteData = {
        title: json.name,
        description: json.description,
        url: json.URL
    };

    return siteData;
};
let name = getData(apiV1).then(function(data) {
    return data.title;
});
console.log(name);

const siteConfig = {
    title: 'Brinca',
    description: "Brazil-Canada Community Association's website",
    email: 'info@brinca.ca',
    url: '/',
    favicon: 'static/favicon.png',
    logo: 'https://brincanada.files.wordpress.com/2019/08/logo.png',
    events: {
        id: 2366,
        slug: 'Eventos'
    },
    soon: {
        id: 689703509,
        title: 'Em Breve',
        slug: 'em-breve'
    },
    menu: {
        id: 286,
        slug: 'menu-topo'
    },
    footer: {
        id: 320
    },
    banner: {
        id: 440
    },
    highlights: {
        id: 193774
    },
    api: {
        v1: apiV1,
        v2: apiV2
    },
    endpoints: {
        posts: `https://public-api.wordpress.com/wp/v2/sites/brincanada.wordpress.com/posts`
    },
    subscription: 'https://docs.google.com/forms/d/e/1FAIpQLSfv4-p0GjPdydFmK8Fte7OD9rt6pM3WYlA8FFATfw-5bNH4QQ',
    english: {
        menu: {
            id: 359
        },
        footer: {
            id: 385
        },
        banner: {
            id: 464
        },
        events: {
            id: 924
        },
        soon: {
            id: 689703716,
            title: 'Soon',
            slug: 'soon'
        },
        highlights: {
            id: 16817
        }
    },
    francais: {
        menu: {
            id: 412
        },
        footer: {
            id: 430
        },
        banner: {
            id: 466
        },
        events: {
            id: 19698
        },
        soon: {
            id: 689703749,
            title: 'Bientôt',
            slug: 'bientot'
        },
        highlights: {
            id: 18285991
        }
    }
};
export default siteConfig;
