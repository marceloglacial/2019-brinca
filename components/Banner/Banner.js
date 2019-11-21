import './Banner.scss';

const Banner = props => {
    const title = props.data.posts[0].title;
    const content = <div className='article-content__text' dangerouslySetInnerHTML={{ __html: props.data.posts[0].content }} />;

    return (
        <section className='banner'>
            <div className='banner__container container'>
                <div className='banner__info'>
                    <div className='banner__title'>
                        <h2 className='heading-title'>{title}</h2>
                    </div>
                    <div className='banner__description'>{content}</div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
