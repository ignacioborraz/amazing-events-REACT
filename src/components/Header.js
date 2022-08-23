import {Link as LinkRouter} from 'react-router-dom'
import '../styles/Header.css'

const pages = [
    {name: 'Home', to: '/'},
    {name: 'Events', to: '/events'},
    {name: 'Crono', to: '/crono'},
    {name: 'Contact', to: '/contact'},
]

const link = (page) => <LinkRouter className='Header-link' to={page.to} key={page.name}>{page.name}</LinkRouter>

function Header() {
    return (
        <div className="Header-container">
            {pages.map(link)}
        </div>
    )
}

export default Header