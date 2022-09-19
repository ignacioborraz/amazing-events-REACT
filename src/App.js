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
import WebsiteLayout from './layouts/WebsiteLayout'

//others
import ScrollToTop from './components/ScrollToTop'
import Alert from './components/Alert'
import { useSignInTokenMutation } from './features/authAPI'
import { setCredentials } from './features/authSlice'

export default function App() {

    const [signInToken] = useSignInTokenMutation()
    const dispatch = useDispatch()
    //useSelector(state => console.log(state))
    const logged = useSelector(state => state.auth.logged)
    //const role = useSelector(state => state.auth.role)

    async function verifyToken() {
        try {
            let res = await signInToken(localStorage.getItem('token'))
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
                  <Route path='/' element={<HomePage />} /> {/* la ven todos */}
                  {/* path se pasa la ruta y en element el componente de pagina a renderizar */}
                  {/* adentro de element tengo que incorporar la logica necesaria para mostrar una pagina u otra */}
                  <Route path='/signup' element={logged ? <HomePage /> : <SignUp />} /> {/* la ven todos los usuarios DESLOGUEADOS */}
                  <Route path='/signin' element={logged ? <HomePage /> : <SignIn />} /> {/* la ven todos los usuarios DESLOGUEADOS */}
                  <Route path='/events' element={<EventsPage />} /> {/* la ven todos */}
                  <Route path='/events/:id' element={<Detail />} /> {/* la ven todos */}
                  {/*<Route path='/new-event' element={role==='admin' ? <HomePage /> : <UnderConstruction />} /> la ve solo el admin cuando está logueado */}
                  {/* en mi caso no tengo definida la pagina de nuevo evento por eso le permito ir a HomePage pero deberia ir NewEvent */}
                  {/* <Route path='/new-admin' element={admin ? <SignUp role='admin' /> : <UnderConstruction />} /> la ve solo el admin cuando está logueado */}
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