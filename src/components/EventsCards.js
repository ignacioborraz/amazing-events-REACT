import {useEffect} from 'react'
import Card from './Card'
import {useSelector, useDispatch} from 'react-redux'
import {fetchFromServer} from '../features/eventsSlice' 
import '../styles/Card.css'

export default function EventsCards() {
    let events = useSelector( state => state.events.events )
    let dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchFromServer())
    }, [])

    return (
        <div className='Events-container'>
            {events.map(event => <Card event={event} key={event.name}/>)}
        </div>
    )
}