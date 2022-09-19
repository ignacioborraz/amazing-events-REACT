import React from 'react'
import {Link as LinkRouter} from 'react-router-dom'
import '../styles/Footer.css'

export default function Footer() {

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <div className='Footer-container'>
            <LinkRouter to='/'>
                <img src='/home.svg' onClick={scrollUp} className='Footer-button' alt='home' />
            </LinkRouter>
            <div className='Footer-middle'>
                <p className='Footer-title'>Amazing Events</p>
                <p className='Footer-p'>borraz - lopez - rodriguez</p>
                <p className='Footer-p'>villafañe</p>
            </div>
            <img src='/top.svg' onClick={scrollUp} className='Footer-button' alt='top' />
        </div>
    )

}