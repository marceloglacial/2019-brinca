import React, { Component, Fragment } from 'react';
import axios from 'axios';
import HeadComponent from '../components/Head/Head';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import '../styles/pages.scss';

export default class extends Component {
    static async getInitialProps(context) {
        const slug = context.query.slug;

        const response = await axios.get(`https://public-api.wordpress.com/wp/v2/sites/brincanada.wordpress.com/pages?slug=${slug}`);
        const site = await axios.get('https://public-api.wordpress.com/rest/v1/sites/brincanada.wordpress.com/');
        const pages = await axios.get('https://public-api.wordpress.com/wp/v2/sites/brincanada.wordpress.com/pages');

        return {
            post: response.data[0],
            site: site.data,
            pages: pages.data
        };
    }

    render() {
        const data = this.props.post;
        const siteData = this.props.site;
        const pagesData = this.props.pages;

        return (
            <Fragment>
                <HeadComponent siteData={siteData} />
                <Header pagesData={pagesData} siteData={siteData} />

                <div className='page'>
                    <div className='page__title'>
                        <h1 className='container'>{data.title.rendered}</h1>
                    </div>
                    <div className='page__content container' dangerouslySetInnerHTML={{ __html: data.content.rendered }} />
                </div>
                <Footer pagesData={pagesData} />
            </Fragment>
        );
    }
}
