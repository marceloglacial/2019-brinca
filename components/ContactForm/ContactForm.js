import './ContactForm.scss';
import { parse } from 'url';

const ContactForm = props => {
    const { email, language } = props;

    const languageSelected = language ? language : 'portuguese';
    let data = '';

    if (languageSelected === 'portuguese') {
        data = {
            name: {
                type: 'Nome',
                name: 'Nome',
                placeholder: 'Nome Completo'
            },
            email: {
                type: 'Email',
                name: 'E-mail',
                placeholder: 'Seu e-mail'
            },
            textarea: {
                name: 'Mensagem',
                placeholder: 'Sua mensagem'
            },
            button: {
                text: 'Enviar'
            }
        };
    }

    if (languageSelected === 'english') {
        data = {
            name: {
                type: 'Name',
                name: 'Name',
                placeholder: 'Full Name'
            },
            email: {
                type: 'Email',
                name: 'E-mail',
                placeholder: 'Your e-mail'
            },
            textarea: {
                name: 'Message',
                placeholder: 'Your message'
            },
            button: {
                text: 'Send'
            }
        };
    }

    if (languageSelected === 'francais') {
        data = {
            name: {
                type: 'Nom',
                name: 'Nom',
                placeholder: 'Nom complet'
            },
            email: {
                type: 'Email',
                name: 'Email',
                placeholder: 'Votre email'
            },
            textarea: {
                name: 'Message',
                placeholder: 'Votre message'
            },
            button: {
                text: 'Envoyer le message'
            }
        };
    }

    return (
        <section className='contact-form'>
            <form action={`https://formspree.io/${email}`} method='POST'>
                <input type={data.name.type} name={data.name.name} placeholder={data.name.placeholder} required />
                <input type={data.email.type} name={data.email.name} placeholder={data.email.placeholder} required />
                <textarea name={data.textarea.name} placeholder={data.textarea.placeholder} rows='10' required />
                <button type='submit'>{data.button.text}</button>
            </form>
        </section>
    );
};

export default ContactForm;
