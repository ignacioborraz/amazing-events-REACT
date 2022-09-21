//libreries
import { useEffect } from 'react'
import { 
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom'
import {
    useDispatch,
    useSelector
} from 'react-redux'
import {
    ToastContainer,
    toast
} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

//pages
import HomePage from './pages/HomePage'
import EventsPage from './pages/EventsPage'
import UnderConstruction from './pages/UnderConstruction'
import Detail from './pages/Detail'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import NewEvent from './pages/NewEvent'
import WebsiteLayout from './layouts/WebsiteLayout'

//others
import ScrollToTop from './components/ScrollToTop'
import Alert from './components/Alert'
import { useSignInTokenMutation } from './features/authAPI'
import { setCredentials } from './features/authSlice'

export default function App() {

    const [signInToken] = useSignInTokenMutation()
    const dispatch = useDispatch()
    useSelector(state => console.log(state))
    const logged = useSelector(state => state.auth.logged)
    const role = useSelector(state => state.auth.role)

    async function verifyToken() {
        try {
            let res = await signInToken()
            //console.log(res)
            if (res.data?.success) {
                //console.log(res.data)
                toast(<Alert text={res.data.message} />)
                dispatch(setCredentials(res.data.response.user))
            } else {
                //console.log(res.error)
                localStorage.removeItem('token')
                toast(<Alert text={res.error.data.message} />)
            }
        } catch(error) {
            localStorage.removeItem('token')
            console.log(error)
        }
    }

    useEffect(() => {
        if (localStorage.getItem('token')) {
            verifyToken()
        }
    }, [])

    return (
        <BrowserRouter>
            <ScrollToTop />
            <WebsiteLayout>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/signup' element={logged ? <HomePage /> : <SignUp />} />
                    <Route path='/signin' element={logged ? <HomePage /> : <SignIn />} />
                    <Route path='/events' element={<EventsPage />} />
                    <Route path='/events/:id' element={<Detail />} />
                    <Route path='/new-event' element={role==='admin' ? <NewEvent /> : <UnderConstruction />} />
                    {/*<Route path='/new-admin' element={admin ? <SignUp role='admin' /> : <UnderConstruction />} />*/}
                    <Route path='*' element={<UnderConstruction />} />
                </Routes>
            </WebsiteLayout>
            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </BrowserRouter>
    )

}