const siteConfig = {
    title: 'Brinca',
    description: "Brazil-Canada Community Association's website",
    url: '/',
    favicon: 'static/favicon.png',
    events: {
        id: 2366,
        slug: 'Eventos'
    },
    highlights: {
        id: 193774,
        slug: 'Destaques'
    },
    endpopints: {
        posts: `https://public-api.wordpress.com/wp/v2/sites/brincanada.wordpress.com/posts`,
        menu: `https://public-api.wordpress.com/wp/v2/sites/brincanada.wordpress.com/posts?categories=36116826`
    }
};
export default siteConfig;
