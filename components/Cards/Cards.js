import Link from 'next/link';
import './Cards.scss';

const Cards = props => {
    const posts = props.posts;

    const cards = (
        <section className='cards'>
            {posts.map(post => (
                <div className='card' key={post.slug}>
                    <Link href='[id]' as={`${post.slug}`}>
                        <a>
                            <img src={post.jetpack_featured_media_url} className='card-img-top' alt={post.title.rendered} />
                            <div className='card-body'>
                                <h5 className='card-title'>{post.title.rendered}</h5>
                            </div>
                        </a>
                    </Link>
                </div>
            ))}
        </section>
    );
    return <>{cards}</>;
};

export default Cards;
