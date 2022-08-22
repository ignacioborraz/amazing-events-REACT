import '../styles/Carousel.css'
import Arrow from './Carousel/Arrow'
import {useEffect, useState} from 'react'

function Carousel(props) {
    const range = props.range
    const limitSlides = (props.slides * range)
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
            setStart(start-range)
            setEnd(end-range)
        } else {
            setStart(limitSlides-range)
            setEnd(limitSlides)
        }
    }

    function next() {
        if (start < limitSlides-range) {
            setStart(start+range)
            setEnd(end+range)
        } else {
            setStart(0)
            setEnd(range)
        }
    }

    return (
            <div className="Carousel-container">
                <h4 className="Carousel-title">{props.text}</h4>
                <div className="Carousel-full">
                    <Arrow icon={"<"} click={previous} />
                    <div className="Carousel-slide">
                        {data.slice(start, end).map(events)}
                    </div>
                    <Arrow icon={">"} click={next} />
                </div>               
            </div>
    )
}

export default Carousel