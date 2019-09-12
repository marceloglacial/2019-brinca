// https://www.eventbriteapi.com/v3/users/me/?token=D3FYWRVPXDLXLBICBIK4
// https://www.eventbrite.com/oauth/D3FYWRVPXDLXLBICBIK4
// https://www.eventbriteapi.com/v3/events/71445849459/?token=D3FYWRVPXDLXLBICBIK4
import fetch from 'isomorphic-unfetch';
import '../Cards/Cards.scss';

const Card = props => {
    const event = props.data;

    const date = function(e) {
        const d = new Date(e);
        const getDate = d.getMonth() + 1;
        const getDay = d.getDate();
        const getYear = d.getFullYear();
        const fullDate = `${getDay}/${getDate}/${getYear}`;
        return fullDate;
    };

    const dateStart = event.start.local ? `From: ${date(event.start.local)}` : '';
    const dateEnd = event.end.local ? ` To: ${date(event.end.local)}` : '';

    const request = async id => {
        let response = await fetch(`https://www.eventbriteapi.com/v3/events/${id}/ticket_classes/?token=D3FYWRVPXDLXLBICBIK4`);
        let json = await response.json();
        let final = json.ticket_classes[0].quantity_total;
        return final;
    };
    // request(event.id).then(console.log);
    

    return (
        <div className='card' key={event.id}>
            <a href={event.url} target='_blank'>
                <img className='card-img-top' src={event.logo.url} />
                <div className='card-body'>
                    <div className='card-badge'>Sold: {request(event.id).then(console.log).toString()}</div>
                    <h5 className='card-title'>{event.name.text}</h5>
                    <div className='card-text'>
                        <p>
                            {dateStart} <br />
                            {dateEnd}
                        </p>
                        <br />
                        <p>{event.description.text}</p>
                    </div>
                </div>
            </a>
        </div>
    );
};

const Rsvp = props => {
    const data = props.data.events;
    return (
        <div className='rsvp container'>
            <br />
            <h2>Agenda</h2>
            <br />
            <div className='cards'>
                {data.map(event => (
                    <Card data={event} key={event.id} />
                ))}
            </div>
        </div>
    );
};

export default Rsvp;
