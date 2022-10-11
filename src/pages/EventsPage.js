import Card from '../components/Card'
import { useParams, Link as LinkRouter } from 'react-router-dom'
import '../styles/Card.css'
import { useGetAllEventsQuery } from '../features/eventsAPI'

export default function EventsPage() {

    let { page } = useParams()

    const {
        data : events,
        error,
        isLoading,
        isSuccess,
        isFailed,
    } = useGetAllEventsQuery(page)

    return (
        <>
        <div className='Events-container'>
            {events?.map(event => <Card event={event} key={event.name}/>)}
        </div>
        <LinkRouter to={`/events/${Number(page)===1 ? 2 : (Number(page)===2 ? 3 : 1)}`} className='Welcome-button'>NEXT</LinkRouter>
        </>
    )
}