import '../styles/Carousel.css'

function Carousel(props) {
    const range = props.range
    const start = 0
    const end = start + range
    const data = props.data

    const events = (event) => (
        <div className="Carousel-event">
            <img src={event.image} alt={event.name} className="Carousel-image" />
            <p className="Carousel-text">{event.name}</p>
        </div>
    )

    return (
            <div className="Carousel-container">
                <h4 className="Carousel-title">{props.text}</h4>
                <div className="Carousel-slide">
                    {data.slice(start, end).map(events)}
                </div>
            </div>
    )
}

export default Carousel