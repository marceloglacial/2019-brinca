import './Rsvp.scss';
import '../Button/Button';

const Event = props => {
    const event = props.data;
    const id = event.id;
    const title = <h5 className='event-title'>{event.name.text}</h5>;
    const url = event.url;
    const logo = event.logo.url ? <img className='event-img-top' src={event.logo.url} /> : '';
    const description = event.description.text ? <p>{event.description.text}</p> : '';

    return (
        <div className='event' key={id}>
            <a href={url} target='_blank'>
                {logo}
                <div className='event-text'>
                    <div className='event-body'>
                        {title}
                        {description}
                    </div>
                </div>
            </a>
        </div>
    );
};

const Rsvp = props => {
    const data = props.data.events;
    const items = props.items;
    const fluid = props.fluid ? 'container' : ''; 

    const title = props.title ? (
        <div className='rsvp__title'>
            <h2 className='heading-title'>Agenda de Eventos</h2>
        </div>
    ) : (
        ''
    );

    const component = data.length ? (
        <section className={`rsvp ${fluid}`}>
            {title}
            <div className='events'>
                {data.slice(0, items).map(event => (
                    <Event data={event} key={event.id} />
                ))}
            </div>
            {props.children}
        </section>
    ) : (
        ''
    );

    return component;
};

export default Rsvp;
