import { Link as LinkRouter } from "react-router-dom"

export default function Card(props) {
    let event = props.event
    return (
        <LinkRouter to={`/events/${event._id}`} className="Card-container">
            <h3 className="CardEvent-title">{event.name}</h3>
            <p className="CardEvent-text">{event.category.name}</p>
            <img src={event.image} className="CardEvent-image" alt={event.name}/>
            <p className="CardEvent-text">{`${(new Date(event.date)).getDate()}-${(new Date(event.date)).getMonth()}-${(new Date(event.date)).getFullYear()}`}</p>
        </LinkRouter>
    )
}