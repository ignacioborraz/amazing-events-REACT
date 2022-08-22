import '../styles/Carousel.css'
import Arrow from './Carousel/Arrow'
import {useEffect, useState} from 'react'

function Carousel(props) {
    const range = props.range
    const [start, setStart] = useState(0)
    const [end, setEnd] = useState(start + range)
    const [intervalId, setIntervalId] = useState()
    const data = props.data
    const interval = props.interval * 1000

    const events = (event) => (
        <div className="Carousel-event" key={event.name}>
            <img src={event.image} alt={event.name} className="Carousel-image" />
            <p className="Carousel-text">{event.name}</p>
        </div>
    )

    useEffect(() => {
        let id = setInterval(function () {
            next()
        }, interval)

        setIntervalId(id)

        return () => clearInterval(intervalId);
    }, [start])

    function previous() {
        if (start >= range) {
            setStart( start-range )
            setEnd( end-range )
        }
    }

    function next() {
        if (end < data.length) {
            setStart( start+range )
            setEnd( end+range )
        }
    }

    return (
            <div className="Carousel-container">
                <h4 className="Carousel-title">{props.text}</h4>
                <div className="Carousel-slide">
                    <Arrow icon={"<"} click={previous} />
                    {data.slice(start, end).map(events)}
                    <Arrow icon={">"} click={next} />
                </div>
            </div>
    )
}

export default Carousel