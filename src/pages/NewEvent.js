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
import FileUpload from '../components/FileUpload'
import { initializeApp } from "firebase/app";

initializeApp({
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTH,
    projectId: process.env.REACT_APP_PROYECT,
    storageBucket: process.env.REACT_APP_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING,
    appId: process.env.REACT_APP_FBID,
    measurementId: process.env.REACT_APP_MEASURE
})

export default function NewEvent() {

    let [ createEvent ] = useCreateEventMutation()
    let form = useRef()
    let navigate = useNavigate()

    async function newEvent(event) {
        event.preventDefault()
        console.log(form.current)
        let data = {}
        Array.from(form.current).forEach(input=>{
            if(input.name==='date') {
                data[input.name] = Date(input.value.trim())
            } else if (input.name==='file') {
                data.image = input.id
            } else if (input.name) {
                data[input.name] = input.value.trim()
            }
        })
        //console.log(data)
        try {
            let res = await createEvent(data)
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
            <input type='date'name='date' placeholder='date' className='New-text'/>
            <input type='text' name='description' placeholder='description' className='New-text'/>
            <input type='text' name='category' placeholder='category' className='New-text'/>
            <input type='text' name='place' placeholder='place' className='New-text'/>
            <input type='number' name='capacity' placeholder='capacity' className='New-text'/>
            <input type='number' name='price' placeholder='price' className='New-text'/>
            <FileUpload name='file'/>
            <input type="submit" className='New-title' required value='create!' />
        </form>
    )

}
