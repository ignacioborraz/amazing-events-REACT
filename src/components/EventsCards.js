import Card from './Card'
import '../styles/Card.css'
import {useGetAllEventsQuery} from '../features/eventsAPI'

export default function EventsCards() {
    const {
        data : events,
        error,
        isLoading,
        isSuccess,
        isFailed,
    } = useGetAllEventsQuery()

    return (
        <div className='Events-container'>
            {events?.map(event => <Card event={event} key={event.name}/>)}
        </div>
    )
}