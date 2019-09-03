import Navigation from '../components/Navigation/Navigation';
import React, { Component, Fragment } from 'react';
import axios from 'axios';
import HeadComponent from '../components/Head/Head';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero/Hero';
import Subscribe from '../components/Subscribe/Subscribe';

export default class extends Component {
    static async getInitialProps() {
        const site = await axios.get('https://public-api.wordpress.com/rest/v1/sites/brincanada.wordpress.com/');
        const pages = await axios.get('https://public-api.wordpress.com/wp/v2/sites/brincanada.wordpress.com/pages');
        const categories = await axios.get('https://public-api.wordpress.com/wp/v2/sites/brincanada.wordpress.com/categories');
        const posts = await axios.get('https://public-api.wordpress.com/wp/v2/sites/brincanada.wordpress.com/posts');

        return {
            site: site.data,
            pages: pages.data,
            categories: categories.data,
            posts: posts.data
        };
    }

    render() {
        const siteData = this.props.site;
        const pagesData = this.props.pages;
        const postsData = this.props.posts;
        const catData = this.props.categories;

        return (
            <Fragment>
                <HeadComponent siteData={siteData} />
                <Header pagesData={pagesData} siteData={siteData} />
                <Hero postsData={postsData} catData={catData}  />
                <Subscribe pagesData={pagesData} />
                <Footer pagesData={pagesData} />
            </Fragment>
        );
    }
}
