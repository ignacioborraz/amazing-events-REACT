import '../styles/Card.css'
import {useGetOneEventQuery} from '../features/eventsAPI'
import { useParams } from 'react-router-dom'

export default function Detail() {
    
    const {id} = useParams()
    const {data} = useGetOneEventQuery(id)

    return (
        <div className="Card-container">
            <h3 className="CardEvent-title">{data?.name}</h3>
            <p className="CardEvent-text">{data?.category}</p>
            <img src={data?.image} className="CardEvent-image" alt={data?.name}/>
            <p className="CardEvent-text">{data?.date}</p>
        </div>
    )

}