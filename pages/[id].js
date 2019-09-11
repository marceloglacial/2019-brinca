import Head from 'next/head';
import Layout from '../components/Layout/Layout';
import fetch from 'isomorphic-unfetch';
import endpoints from '../endpoints';

const PageForm = props => {
    const data = props.data;
    const pageSlug = data.slug;

    if (pageSlug === 'fale-conosco') {
        return (
            <div className='contact__form container'>
                <form action={`https://formspree.io/glacial@gmail.com`} method='POST'>
                    <input type='Nome' name='Nome Completo' placeholder='Nome Completo' required />
                    <input type='Email' name='E-mail' placeholder='E-mail' required />
                    <textarea name='Messagem' placeholder='Sua mensagem' rows='10' required />
                    <button type='submit'>Enviar</button>
                </form>
            </div>
        );
    } else {
        return <></>;
    }
};

const Post = props => {
    const data = props.post;

    return (
        <>
            <Head>
                <title>Brinca: {data.title.rendered}</title>
            </Head>
            <Layout data={props.menu}>
                <article className='article-container'>
                    <header className='article-header'>
                        <h2 className='article-header__title container'>{data.title.rendered}</h2>
                    </header>
                    <section className='article-content container' dangerouslySetInnerHTML={{ __html: data.content.rendered }} />
                    <PageForm data={data} />
                </article>
            </Layout>
        </>
    );
};

Post.getInitialProps = async function(context) {
    // Posts
    const { id } = context.query;
    const res = await fetch(`${endpoints.posts}?slug=${id}`);
    const json = await res.json();

    // Menus
    const resMenu = await fetch(endpoints.menu);
    const jsonMenu = await resMenu.json();
    return { menu: jsonMenu, post: json[0] };
};

export default Post;
