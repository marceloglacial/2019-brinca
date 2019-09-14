// Eventbrite public Keys
const userId = '219069175457';
const publicToken = 'DN7S32U4FPPCU4YRXHL3';

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
    rsvp: {
        id: 987,
        slug: 'Agenda'
    },
    endpopints: {
        posts: `https://public-api.wordpress.com/wp/v2/sites/brincanada.wordpress.com/posts`,
        menu: `https://public-api.wordpress.com/wp/v2/sites/brincanada.wordpress.com/posts?categories=36116826`,
        rsvp: `https://www.eventbriteapi.com/v3/events/search/?user.id=${userId}&token=${publicToken}`,
        banner: `https://public-api.wordpress.com/wp/v2/sites/brincanada.wordpress.com/posts/219`
        
    },
    subscription: 'https://docs.google.com/forms/d/e/1FAIpQLSfv4-p0GjPdydFmK8Fte7OD9rt6pM3WYlA8FFATfw-5bNH4QQ'
};
export default siteConfig;
