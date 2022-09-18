import { useState, useRef, useEffect } from 'react'
import { Link as LinkRouter, useLocation, useNavigate } from 'react-router-dom'
import '../styles/Header.css'
import axios from 'axios'
import apiUrl from '../url'

const pages = [
    { name: 'Home', to: '/' },
    { name: 'Events', to: '/events' }
]

function Header() {
    
    const [logged,setLogged] =useState(false)
    const [open, setOpen] = useState(false)
    const location = useLocation()
    const menuIcon = useRef(null)
    const navigate = useNavigate()

    const link = (page) => page.to === location.pathname ? (<div className='Header-link active' key={page.name}>{page.name}</div>) : (<LinkRouter className='Header-link' to={page.to} key={page.name}>{page.name}</LinkRouter>)

    const handleCloseMenu = (event) => {
        const isClickInside = menuIcon.current.contains(event.target)
        if(menuIcon.current !== event.target && !isClickInside) {
            setOpen(false)
        }        
    }

    const handleToggleMenu = () => {
        setOpen(!open)
    }

    useEffect(() => {
        document.addEventListener('click', handleCloseMenu)        
        return () => document.removeEventListener('click', handleCloseMenu)
    }, [])

    useEffect(() => {
        JSON.parse(localStorage.getItem('user'))&&setLogged(true)
    }, [])

    async function signOut() {
        let email = JSON.parse(localStorage.getItem('user')).email //primero busco el mail del objeto del localStorage
        try {
            let response = await axios.post(apiUrl+'auth/signout',{email}) //realizo la peticion (con REDUX o con AXIOS)
            console.log(response)
            setLogged(false) //seteo nuevamente a false el logged para mostrar la barra de navegacion de usuario deslogueado
            localStorage.removeItem('user') //removí del localStorage la clave 'user'
            localStorage.removeItem('token') //removí del localStorage la clave 'user'
            navigate("/",{replace:true}) //redirigí al index
        } catch(error) {
            console.log(error)
        }
    }

    return (logged ? ( //si el usuario esta logueado
        <div className="Header-container">
            {pages.map(link)}
            {open && (
                <div className='Header-user'>
                    <div className='Header-option'>{JSON.parse(localStorage.getItem('user')).name}</div> {/* busco la propiedad name de la clave user */}
                    <div className='Header-option' onClick={signOut}>Sign Out</div> {/* link para desloguear */}
                </div>
            )}
            <img ref={menuIcon} src='/user.svg' className="Header-icon" onClick={handleToggleMenu} alt='user' />
        </div>
    ) : ( //si no esta logueado voy a mostrar estas opciones
        <div className="Header-container">
            {pages.map(link)}
            {open && (
                <div className='Header-user'>
                    <LinkRouter className='Header-option' to='signin'>Sign In</LinkRouter> {/* opcion para loguearse */}
                    <LinkRouter className='Header-option' to='signup'>Sign Up</LinkRouter> {/* opcion para registrarse */}
                </div>
            )}
            <img ref={menuIcon} src='/user.svg' className="Header-icon" onClick={handleToggleMenu} alt='user' />
        </div>
    ))
}

export default Header

// open ? 'true' : 'false'

// CONDICIONES DE LA BARRA DE NAVEGACION

// el usuario está logueado ?
    // el usuario es estandar ?
        //muetro cities y mytineraries
    // el usuario es admin ?
        //muestro cities, new city, edit city
// el usuario no está logueado

// user?
    //(user.role=user?
        //(opciones para usuario estandar) : (opciones para usuario admin) ) : (opciones usuario deslogueado)

//LOGGED ES UN ESTADO QUE SE DEBE modificar desde Header y desde TODAS las opciones de ingreso (por formulario y por google)
//por eso LOGGED debe ser un estado global y manejarse con REDUX