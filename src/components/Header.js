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
        let email = JSON.parse(localStorage.getItem('user')).email
        try {
            let response = await axios.post(apiUrl+'auth/signout',{email})
            console.log(response)
            localStorage.removeItem('user')
            navigate("/",{replace:true})
        } catch(error) {
            console.log(error)
        } 
    }

    return (logged ? (
        <div className="Header-container">
            {pages.map(link)}
            {open && (
                <div className='Header-user'>
                    <div className='Header-option'>{JSON.parse(localStorage.getItem('user')).name}</div>
                    <div className='Header-option' onClick={signOut}>Sign Out</div>
                </div>
            )}
            <img ref={menuIcon} src='/user-icon.png' className="Header-icon" onClick={handleToggleMenu} alt='user' />
        </div>
    ) : (
        <div className="Header-container">
            {pages.map(link)}
            {open && (
                <div className='Header-user'>
                    <LinkRouter className='Header-option' to='signin'>Sign In</LinkRouter>
                    <LinkRouter className='Header-option' to='signup'>Sign Up</LinkRouter>
                </div>
            )}
            <img ref={menuIcon} src='/user-icon.png' className="Header-icon" onClick={handleToggleMenu} alt='user' />
        </div>
    ))
}

export default Header

// open ? 'true' : 'false'