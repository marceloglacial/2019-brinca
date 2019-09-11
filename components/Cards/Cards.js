import Link from 'next/link';
import './Cards.scss';

const Cards = props => {
    const data = props.data;
    const posts = props.posts;

    if (data.slug === 'eventos') {
        const cards = (
            <div className='cards'>
                {posts.map(post => (
                    <div className='card' key={post.slug}>
                        <Link href='[id]' as={`${post.slug}`}>
                            <a>
                                <img src={post.jetpack_featured_media_url} className='card-img-top' alt={post.title.rendered} />
                                <div className='card-body'>
                                    <h5 className='card-title'>{post.title.rendered}</h5>
                                    <div className='card-text' dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} key={`slide-${post.slug}`} />
                                </div>
                            </a>
                        </Link>
                    </div>
                ))}
            </div>
        );
        return <>{cards}</>;
    } else {
        return <></>;
    }
};

export default Cards;
