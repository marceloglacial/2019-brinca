// Api constructor
let api = new (function() {
    this.v1 = 'https://public-api.wordpress.com/rest/v1.1/sites/brincanada.wordpress.com';
    this.v2 = 'https://public-api.wordpress.com/wp/v2/sites/brincanada.wordpress.com';
    this.siteInfo = this.v1;
    this.posts = this.v2 + '/posts';
    this.categories = this.v2 + '/categories';
    this.email = 'info@brinca.ca'; // TODO: get dynamicaly
    this.icon = {};
    this.hero = {};
    this.nav = {};
    this.navItems = {};
    this.footer = {};
})();

// TODO: Add default slugs to README docs
// Get Hero
const heroSlug = {
    portugues: 'destaques',
    english: 'highlights',
    francais: 'faits-saillants'
};
Object.entries(heroSlug).forEach(([key, value]) => {
    let values = JSON.parse('{"' + key + '":"' + api.v1 + '/posts/?category=' + value + '&order=DESC"}');
    Object.assign(api.hero, values);
});

// Get Icons Banner
const iconSlug = {
    portugues: 'icones',
    english: 'icons',
    francais: 'icone'
};
Object.entries(iconSlug).forEach(([key, value]) => {
    let values = JSON.parse('{"' + key + '":"' + api.v1 + '/posts/?category=' + value + '"}');
    Object.assign(api.icon, values);
});

// Get Nav
const navSlug = {
    portugues: 'menu-topo',
    english: 'menu-top',
    francais: 'menu-entete'
};
Object.entries(navSlug).forEach(([key, value]) => {
    let values = JSON.parse('{"' + key + '":"' + api.v1 + '/posts/slug:' + value + '"}');
    Object.assign(api.nav, values);
});

// Get Footer
const footerSlug = {
    portugues: 'menu-rodape',
    english: 'menu-footer',
    francais: 'menu-pied-de-page'
};
Object.entries(footerSlug).forEach(([key, value]) => {
    let values = JSON.parse('{"' + key + '":"' + api.v1 + '/posts/slug:' + value + '"}');
    Object.assign(api.footer, values);
});

// console.log(api);

export default api;
