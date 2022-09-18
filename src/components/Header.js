import { useState, useRef, useEffect } from 'react'
import { Link as LinkRouter, useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useSignOutMutation } from '../features/authAPI'
import { useDispatch } from 'react-redux'
import { deleteCredentials } from '../features/authSlice'
import '../styles/Header.css'

const pages = [
    { name: 'Home', to: '/' },
    { name: 'Events', to: '/events' }
]

function Header() {
    
    const [open, setOpen] = useState(false)
    const location = useLocation()
    const menuIcon = useRef(null)
    const navigate = useNavigate()
    const [signOut] = useSignOutMutation()
    const dispatch = useDispatch()
    const user = useSelector(state => state.auth.user)
    const role = useSelector(state => state.auth.role)
    const logged = useSelector(state => state.auth.logged)

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

    async function logOut() {
        //let email = JSON.parse(localStorage.getItem('user')).email //primero busco el mail del objeto del localStorage
        try {
            await signOut()
            localStorage.removeItem('token')
            dispatch(deleteCredentials())
            navigate("/",{replace:true})
        } catch(error) {
            console.log(error)
        }
    }

    return (logged ? ( //si el usuario esta logueado
        <div className="Header-container">
            {pages.map(link)}
            {open && (
                <div className='Header-user'>
                    <div className='Header-option'>{user?.name}</div> {/* busco la propiedad name de la clave user */}
                    <div className='Header-option' onClick={logOut}>Sign Out</div> {/* link para desloguear */}
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