import './Banner.scss';
import Button from '../Button/Button';

const Banner = props => {
    const data = props.data;
    if (data.id) {
        const banner = {
            title: data.title.rendered,
            content: <div className='article-content__text' dangerouslySetInnerHTML={{ __html: data.content.rendered }} />,
            button: data.title.rendered,
            link: data.slug
        };

        return (
            <section className='banner'>
                <div className='banner__container container'>
                    <div className='banner__info'>
                        <div className='banner__title'>
                            <h3 className='heading-title'>{banner.title}</h3>
                        </div>
                        <div className='banner__description'>{banner.content}</div>
                    </div>
                    <div className='banner__cta'>
                        <Button title={banner.button} link={banner.link} />
                    </div>
                </div>
            </section>
        );
    } else {
        return (
            <section className='jumbotron'>
                <h2 className='container display-4'>Sorry. No content found.</h2>
            </section>
        )
    }
};

export default Banner;
