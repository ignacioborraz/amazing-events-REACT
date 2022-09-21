import '../styles/Detail.css'
import {
    useRef
} from 'react'
import {
    useCreateEventMutation
} from '../features/eventsAPI'
import {
    useNavigate
} from 'react-router-dom'


export default function NewEvent() {

    let [ createEvent ] = useCreateEventMutation()
    let name = useRef()
    let image = useRef()
    let date = useRef()
    let description = useRef()
    let category = useRef()
    let place = useRef()
    let capacity = useRef()
    let estimated = useRef()
    let price = useRef()
    let navigate = useNavigate()

    async function newEvent(event) {
        event.preventDefault()
        let data = {
            name: name.current?.value.trim(),
            image: image.current?.value.trim(),
            date: date.current?.value.trim(),
            description: description.current?.value.trim(),
            category: category.current?.value.trim(),
            place: place.current?.value.trim(),
            capacity: capacity.current?.value.trim(),
            estimated: estimated.current?.value.trim(),
            price: price.current?.value.trim(),
            likes: []
        }
        try {
            let res = await createEvent(data)
            console.log(res)
            if (res.data?.success) {
                navigate("/events",{replace:true})
            } else {
                console.log(res.error)
            }
        } catch(error) {
            console.log(error)
        }
    }

    return (
        <div className="Detail-container">
            <form onSubmit={newEvent} className=''>
                <input type='text' ref={name} placeholder='name'/>
                <input type='url' ref={image} placeholder='image'/>
                <input type='date' ref={date} placeholder='date'/>
                <input type='text' ref={description} placeholder='description'/>
                <input type='text' ref={category} placeholder='category'/>
                <input type='text' ref={place} placeholder='place'/>
                <input type='number' ref={capacity} placeholder='capacity'/>
                <input type='number' ref={estimated} placeholder='estimated'/>
                <input type='number' ref={price} placeholder='price'/>
                <input type="submit" className='' required value='create!' />
            </form>
        </div>
    )

}
