import Card from './Card'
import axios from 'axios'
import '../styles/Card.css'
import apiUrl from '../url'
import { useEffect, useState } from 'react'

export default function EventsCards() {
    let [events,setEvents] = useState([])
    
    useEffect(() =>{
        axios.get(apiUrl+'events').then(response => setEvents(response.data))
    },[])

    return (
        <div className='Events-container'>
            {events.map(event => <Card event={event} key={event._id}/>)}
        </div>
    )
}