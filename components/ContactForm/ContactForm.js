import './ContactForm.scss';

const ContactForm = props => {
    return (
        <div className='contact-form'>
            <form action={`https://formspree.io/glacial@gmail.com`} method='POST'>
                <input type='Nome' name='Nome Completo' placeholder='Nome Completo' required />
                <input type='Email' name='E-mail' placeholder='E-mail' required />
                <textarea name='Messagem' placeholder='Sua mensagem' rows='10' required />
                <button type='submit'>Enviar</button>
            </form>
        </div>
    );
};

export default ContactForm;
