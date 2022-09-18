import '../styles/Detail.css'
import { useGetOneEventQuery, useLikeDislikeMutation } from '../features/eventsAPI'
import { useParams } from 'react-router-dom'

export default function Detail() {
    
    const {id} = useParams()
    const {data} = useGetOneEventQuery(id)
    const [likeDislike] = useLikeDislikeMutation()

    async function like(event) {
        console.log(id)
        likeDislike(id)
    }

    return (
        <div className="Detail-container">
            <h3 className="Detail-title">{data?.name}</h3>
            <p className="Detail-text">{data?.category}</p>
            <img src={data?.image} className="Detail-image" alt={data?.name} />
            <p className="Detail-date">{data?.date}</p>
            <p className="Detail-date">{data?.description}</p>
            <p className="Detail-text">
                <img src='/like.svg' onClick={like} className='Detail-button' alt='like' />
            </p>
        </div>
    )

}