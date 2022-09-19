import '../styles/Card.css'
import Card from '../components/Card'
import { useGetAllEventsQuery } from '../features/eventsAPI'

export default function EventsPage() {
    
    const { data : events } = useGetAllEventsQuery()

    return (
        <div className='Events-container'>
            {events?.map(event => <Card event={event} key={event.name}/>)}
        </div>
    )
}