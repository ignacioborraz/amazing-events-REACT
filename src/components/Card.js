export default function Card(props) {
    let event = props.event
    return (
        <div className="Card-container">
            <h3 className="CardEvent-title">{event.name}</h3>
            <p className="CardEvent-text">{event.category}</p>
            <img src={event.image} className="CardEvent-image" alt={event.name}/>
            <p className="CardEvent-text">{event.date}</p>
        </div>
    )
}