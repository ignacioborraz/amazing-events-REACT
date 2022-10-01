import '../styles/Detail.css'
import {
    useState,
    useEffect
} from 'react'
import { useParams } from 'react-router-dom'
import {
    //useDispatch,
    useSelector
} from 'react-redux'
import {
    useGetOneEventMutation,
    useLikeDislikeMutation
} from '../features/eventsAPI'


export default function Detail() {
    
    const { id } = useParams()
    let [ getOneEvent ] = useGetOneEventMutation()
    const [ likeDislike ] = useLikeDislikeMutation()
    const [data,setData] = useState({})
    const [image,setImage] = useState('')
    const [reload,setReload] = useState(true)
    const userId = useSelector(state => state.auth.userId)

    useEffect(()=>{
        getEvent()
    },[reload])

    async function getEvent() {
        try {
            let res = await getOneEvent(id)
            //console.log(res)
            if (res.data?.success) {
                console.log(res.data.response.likes)
                if (res.data.response.likes.includes(userId)) {
                    console.log('boton para quitar')
                    setImage('/dislike.svg')
                } else {
                    console.log('boton para agregar')
                    setImage('/like.svg')
                }
                setData(res.data.response)
            } else {
                console.log(res.error)
            }
        } catch(error) {
            console.log(error)
        }
    }

    async function like(event) {
        //console.log(id)
        if (localStorage.getItem('token')) {
            try {
                let res = await likeDislike(id)
                if (res.data?.success) {
                    console.log(res.data)
                    setReload(!reload)
                } else {
                    console.log(res.error)
                }
            } catch(error) {
                console.log(error)
            }
        }
    }

    return (data &&
        <div className="Detail-container">
            <h3 className="Detail-title">{data.name}</h3>
            <p className="Detail-text">{data.category}</p>
            <img src={data.image} className="Detail-image" alt={data.name} />
            <p className="Detail-date">{`${(new Date(data.date)).getDate()}-${(new Date(data.date)).getMonth()}-${(new Date(data.date)).getFullYear()}`}</p>
            <p className="Detail-description">{data.description}</p>
            <p className="Detail-text">
                <img src={image} onClick={like} className='Detail-button' alt='like' />
            </p>
        </div>
    )

}