import Head from 'next/head';
import Layout from '../components/Layout/Layout';
import fetch from 'isomorphic-unfetch';
import endpoints from '../endpoints';

const Contact = props => {
    const email = `glacial@gmail.com`;

    return (
        <>
            <Head>
                <title>Contact</title>
            </Head>
            <Layout data={props.menu}>
                <article className='article-container con'>
                    <header className='article-header'>
                        <h2 className='article-header__title'>Fale Conosco</h2>
                    </header>
                    <div className='contact__form'>
                        <form action={`https://formspree.io/${email}`} method='POST'>
                            <input type='text' name='Nome Completo' placeholder='Nome Completo' required />
                            <input type='email' name='E-mail' placeholder='E-mail' required />
                            <textarea rows='10' />
                            <input type='submit' className='contact__input contact__input--submit' value='Cadastre-se' />
                        </form>
                    </div>
                </article>
            </Layout>
        </>
    );
};
Contact.getInitialProps = async function() {
    // Menus
    const resMenu = await fetch(endpoints.menu);
    const jsonMenu = await resMenu.json();
    return { menu: jsonMenu };
};

export default Contact;
