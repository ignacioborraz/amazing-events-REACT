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
    useGetOneEventMutation
} from '../features/eventsAPI'
import {
    useGetLikesMutation,
    useLikeDislikeMutation,
    useMyLikeMutation
} from '../features/likesAPI'


export default function Detail() {
    
    const { id } = useParams()
    const userId = useSelector(state => state.auth.userId)
    let [ getOneEvent ] = useGetOneEventMutation()
    let [ getLikes ] = useGetLikesMutation()
    const [ myLike ] = useMyLikeMutation()
    const [ likeDislike ] = useLikeDislikeMutation()
    const [data,setData] = useState({})
    const [image,setImage] = useState('')
    const [like,setLike] = useState(0)
    const [reload,setReload] = useState(true)

    useEffect(()=> {
        getEvent()
        initialLike()
        // eslint-disable-next-line
    },[userId])

    useEffect(()=> {
        likes()
        // eslint-disable-next-line
    },[reload])

    async function getEvent() {
        try {
            let res = await getOneEvent(id)
            setData(res.data.response)
        } catch(error) {
            console.log(error)
        }        
    }

    async function initialLike() {
        if (userId) {
            try {
                let res = await myLike({ id,userId })
                if (res.data.likes) {
                    setImage('/dislike.svg')
                } else {
                    setImage('/like.svg')
                }
            } catch(error) {
                setImage('/like.svg')
                console.log(error)
            }
        } else {
            setImage('/like.svg')
        }
    }

    async function likes() {
        try {
            let res = await getLikes(id)
            setLike(res.data.likes)
        } catch(error) {
            console.log(error)
        }
    }

    async function likeOrDislike() {
        if (userId) {
            try {
                let res = await likeDislike(id)
                if (res.data.message==='liked') {
                    setImage('/dislike.svg')
                } else {
                    setImage('/like.svg')
                }
                setReload(!reload)
            } catch(error) {
                console.log(error)
            }
        }        
    }

    return (data &&
        <div className="Detail-container">
            <h3 className="Detail-title">{data.name}</h3>
            <p className="Detail-text">{data.category?.name}</p>
            <img src={data.image} className="Detail-image" alt={data.name} />
            <p className="Detail-date">{`${(new Date(data.date)).getDate()}/${(new Date(data.date)).getMonth()}/${(new Date(data.date)).getFullYear()}`} - {like} likes!</p>
            <p className="Detail-text">
                <img src={image} onClick={likeOrDislike} className='Detail-button' alt='like' />
            </p>
            <p className="Detail-description">{data.description}</p>
        </div>
    )

}