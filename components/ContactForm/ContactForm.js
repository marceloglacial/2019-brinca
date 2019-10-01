import './ContactForm.scss';

const ContactForm = props => {
    const email = props.email;

    return (
        <section className='contact-form'>
            <form action={`https://formspree.io/${email}`} method='POST'>
                <input type='Nome' name='Nome Completo' placeholder='Nome Completo' required />
                <input type='Email' name='E-mail' placeholder='E-mail' required />
                <textarea name='Messagem' placeholder='Sua mensagem' rows='10' required />
                <button type='submit'>Enviar</button>
            </form>
        </section>
    );
};

export default ContactForm;
