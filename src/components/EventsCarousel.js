import { useDispatch, useSelector } from 'react-redux'
import { getAll } from '../features/eventSlice'
import Carousel from './Carousel'

function EventsCarousel() {

    const dispatch = useDispatch()
    dispatch(getAll())
    const events = useSelector(async (state) => await state)
    console.log(events)    

    return (
        <Carousel data={events} range={4} slides={5} interval={5} text='Popular Events' />
    )
}

export default EventsCarousel