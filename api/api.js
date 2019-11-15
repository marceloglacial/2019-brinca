// Api constructor
let api = new (function() {
    this.v1 = 'https://public-api.wordpress.com/rest/v1.1/sites/brincanada.wordpress.com';
    this.v2 = 'https://public-api.wordpress.com/wp/v2/sites/brincanada.wordpress.com';
    this.siteInfo = this.v1;
    this.posts = this.v2 + '/posts';
    this.categories = this.v2 + '/categories';
    this.email = 'info@brinca.ca'; // TODO: get dynamicaly
})();

// Hero
const heroSlug = {
    pt: 'destaques',
    en: 'highlights',
    fr: 'faits-saillants'
};
Object.entries(heroSlug).forEach(([key, value]) => {
    api['hero' + key] = api.v1 + '/posts/?category=' + value + '&order=DESC';
});

// Icons
const iconSlug = {
    pt: 'icones',
    en: 'icons',
    fr: 'icone'
};
Object.entries(iconSlug).forEach(([key, value]) => {
    api['iconhome' + key] = api.v1 + '/posts/?category=' + value + '&order=DESC';
});
// console.log(api);

export default api;
