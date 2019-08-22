import React from 'react';
import Head from 'next/head';

const HeadComponent = props => {
    const siteItems = props.siteData;
    const { name, description, icon } = siteItems;

    return (
        <div>
            <Head>
                <title>
                    {name} - {description}
                </title>
                <meta name='viewport' content='width=device-width,initial-scale=1,viewport-fit=cover' key='viewport' />
                <link rel='shortcut icon' type='image/x-icon' href={icon.ico} />
            </Head>
        </div>
    );
};

export default HeadComponent;
