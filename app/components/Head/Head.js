import Head from 'next/head';

function HeadComponent() {
    return (
        <div>
            <Head>
                <title>Brinca</title>
                <meta name='viewport' content='initial-scale=1.0, width=device-width' key='viewport' />
                <link rel='shortcut icon' type='image/x-icon' href='https://bulma.io/favicons/favicon.ico' />
            </Head>
        </div>
    );
}

export default HeadComponent;
