import { useState, useEffect } from 'react'
import HomePage from './pages/HomePage'
import EventsPage from './pages/EventsPage'
import UnderConstruction from './pages/UnderConstruction'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import WebsiteLayout from './layouts/WebsiteLayout'
import Detail from './pages/Detail'
import ScrollToTop from './components/ScrollToTop'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'

function App() {

  const [logged,setLogged] = useState(false) //por defecto nuestra aplicacion está preparada para
  const [admin,setAdmin] = useState(false) //usuarios NO logueado y usuarios COMUNES
  
  useEffect(() => {
      JSON.parse(localStorage.getItem('user')) && setLogged(true)
      //si existe en el localStorage: seteo logged
      JSON.parse(localStorage.getItem('user'))?.role==='admin' && setAdmin(true)
      //si existe y es admin: seteo admin
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
          <Route path='/new-event' element={admin ? <HomePage /> : <UnderConstruction />} /> {/* la ve solo el admin cuando está logueado */}
          {/* en mi caso no tengo definida la pagina de nuevo evento por eso le permito ir a HomePage pero deberia ir NewEvent */}
          {/* <Route path='/new-admin' element={admin ? <SignUp role='admin' /> : <UnderConstruction />} /> la ve solo el admin cuando está logueado */}
          <Route path='*' element={<UnderConstruction />} />
        </Routes>
      </WebsiteLayout>
    </BrowserRouter>
  )
}

export default App;

//SI el usuario está logueado NO debo mostrarle algunas páginas
  //usuario común NO puede tener acceso a crear eventos (ciudades en mytineraries)

//LOGGED ES UN ESTADO QUE SE DEBE modificar desde Header y desde TODAS las opciones de ingreso (por formulario y por google)
//por eso LOGGED debe ser un estado global y manejarse con REDUX