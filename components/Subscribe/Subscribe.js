import React from 'react';
import './Subscribe.scss';

const Subscribe = props => {
    // Get data
    const data = props.pagesData;
    const email = `glacial@gmail.com`;

    // Find Page
    const subscribeHome = data.map(pageItem => {
        const { title, content, slug } = pageItem;

        if (slug === 'associe-se') {
            return (
                <div className='subscribe container' key='subscribe'>
                    <div className='subscribe__info'>
                        <h3 className='subscribe__title'>{title.rendered}</h3>
                        <div className='subscribe__text' dangerouslySetInnerHTML={{ __html: content.rendered }} key={slug} />
                    </div>
                    <div className='subscribe__form'>
                        <form action={`https://formspree.io/${email}`} method='POST'>
                            <input type='text' name='Nome Completo' placeholder='Nome Completo' required />
                            <input type='email' name='E-mail' placeholder='E-mail' required />
                            <input type='submit' className='subscribe__input subscribe__input--submit' value='Cadastre-se' />
                        </form>
                    </div>
                </div>
            );
        }
    });

    return subscribeHome;
};

export default Subscribe;
