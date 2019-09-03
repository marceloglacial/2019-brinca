import Navigation from '../components/Navigation/Navigation';
import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Link from 'next/link';

export default class extends Component {
    static async getInitialProps() {
        const response = await axios.get('https://public-api.wordpress.com/wp/v2/sites/brincanada.wordpress.com/posts/');

        return {
            posts: response.data
        };
    }

    render() {
        return (
            <Fragment>
                <Navigation />
                <h1>Our Posts Page!</h1>
                <ul>
                    {this.props.posts.map(post => {
                        return (
                            <Link href={`/posts/${post.slug}`} key={post.id}>
                                <li>
                                    <a href={`/posts/${post.slug}`}>{post.title.rendered}</a>
                                </li>
                            </Link>
                        );
                    })}
                </ul>
            </Fragment>
        );
    }
}
