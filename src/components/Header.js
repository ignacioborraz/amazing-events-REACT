import { useState, useRef, useEffect } from 'react'
import { Link as LinkRouter, useLocation } from 'react-router-dom'
import '../styles/Header.css'

const pages = [
    { name: 'Home', to: '/' },
    { name: 'Events', to: '/events' },
    { name: 'Contact', to: '/contact' }
]

function Header() {
    const [open, setOpen] = useState(false)
    const location = useLocation()
    const menuIcon = useRef(null)

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
        
        return () => {
            document.removeEventListener('click', handleCloseMenu)
        }
    }, [])

    return (
        <div className="Header-container">
            {pages.map(link)}
            {open && (
                <div className='Header-user'>
                    <LinkRouter className='Header-option' to='login'>Log In</LinkRouter>
                    <LinkRouter className='Header-option' to='signup'>Sign Up</LinkRouter>
                </div>
            )}
            <img ref={menuIcon} src='/user-icon.png' className="Header-icon" onClick={handleToggleMenu} alt='user' />
        </div>
    )
}

export default Header

// open ? 'true' : 'false'