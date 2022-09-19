import { useDispatch, useSelector } from 'react-redux'
import { getAll } from '../features/eventSlice'
import Carousel from './Carousel'
import {useGetAllEventsQuery} from '../features/eventsAPI'

function EventsCarousel() {
    const {
        data : events,
    } = useGetAllEventsQuery()

    return (
        <Carousel data={events} range={4} slides={5} interval={5} text='Popular Events' />
    )
}

export default EventsCarousel