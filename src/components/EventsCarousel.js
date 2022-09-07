import { useDispatch, useSelector } from 'react-redux'
import { getAll } from '../features/eventSlice'
import Carousel from './Carousel'
import axios from 'axios'
import apiUrl from '../url'
import { useEffect, useState } from 'react'

function EventsCarousel() {
<<<<<<< HEAD
    let [events,setEvents] = useState([])
    
    useEffect(() =>{
        axios.get(apiUrl+'events').then(response => setEvents(response.data))
    },[])
=======

    const dispatch = useDispatch()
    dispatch(getAll())
    const events = useSelector(async (state) => await state)
    console.log(events)    
>>>>>>> 198667da7ab93ee1eb02fee29a07efc6543edf2b

    return (
        <Carousel data={events} range={4} slides={5} interval={5} text='Popular Events' />
    )
}

export default EventsCarousel