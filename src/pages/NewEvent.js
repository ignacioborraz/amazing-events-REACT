import Alert from '../components/Alert'
import {
    useRef
} from 'react'
import {
    useCreateEventMutation
} from '../features/eventsAPI'
import {
    useNavigate
} from 'react-router-dom'
import {
    toast
} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import '../styles/NewEvent.css'

export default function NewEvent() {

    let [ createEvent ] = useCreateEventMutation()
    let form = useRef()
    let navigate = useNavigate()

    async function newEvent(event) {
        event.preventDefault()
        //console.log(form.current)
        let data = { likes: [] }
        Array.from(form.current).forEach(input=>{
            if(input.name==='date') {
                data[input.name] = Date(input.value.trim())
            } else if (input.name) {
                data[input.name] = input.value.trim()
            }
        })
        //console.log(data)
        try {
            let res = await createEvent(data)
            console.log(res)
            if (res.data?.success) {
                navigate("/events",{replace:true})
                toast(<Alert text={res.data.message} />)
            } else {
                console.log(res.error)
                toast(<Alert text={res.error.data.message} />)
            }
        } catch(error) {
            console.log(error)
        }
    }

    return (
        <form onSubmit={newEvent} ref={form} className='New-container'>
            <input type='text' name='name' placeholder='name' className='New-text'/>
            <input type='url' name='image' placeholder='image' className='New-text'/>
            <input type='date'name='date' placeholder='date' className='New-text'/>
            <input type='text' name='description' placeholder='description' className='New-text'/>
            <input type='text' name='category' placeholder='category' className='New-text'/>
            <input type='text' name='place' placeholder='place' className='New-text'/>
            <input type='number' name='capacity' placeholder='capacity' className='New-text'/>
            <input type='number' name='estimated' placeholder='estimated' className='New-text'/>
            <input type='number' name='price' placeholder='price' className='New-text'/>
            <input type="submit" className='New-title' required value='create!' />
        </form>
    )

}
