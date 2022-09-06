import Carousel from './Carousel'
import axios from 'axios'
import apiUrl from '../url'
import { useEffect, useState } from 'react'

function EventsCarousel() {
    let [events,setEvents] = useState([])
    
    useEffect(() =>{
        axios.get(apiUrl+'events').then(response => setEvents(response.data))
    },[])

    return (
        <Carousel data={events} range={4} slides={5} interval={5} text='Popular Events' />
    )
}

export default EventsCarousel