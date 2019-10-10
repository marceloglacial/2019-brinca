const siteConfig = {
    title: 'Brinca',
    description: "Brazil-Canada Community Association's website",
    email: 'glacial@gmail.com',
    url: '/',
    favicon: 'static/favicon.png',
    events: {
        id: 2366,
        slug: 'Eventos'
    },
    menu: {
        id: 286
    },
    footer: {
        id: 320
    },
    banner: {
        id: 219
    },
    highlights: {
        id: 193774
    },
    endpoints: {
        posts: `https://public-api.wordpress.com/wp/v2/sites/brincanada.wordpress.com/posts`
    },
    subscription: 'https://docs.google.com/forms/d/e/1FAIpQLSfv4-p0GjPdydFmK8Fte7OD9rt6pM3WYlA8FFATfw-5bNH4QQ'
};
export default siteConfig;
