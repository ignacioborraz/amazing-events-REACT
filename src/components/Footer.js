import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/Footer.css'


export default function Footer() {

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <div className='Footer-container'>
        <p className='Footer-title'>Amazing Events</p>
        <p className='Footer-p'>borraz - lopez - rodriguez - villafañe</p>
        <button onClick={scrollUp}>TOP</button>
        <Link to='/'>Home</Link>
        <Link to='/events'>Events</Link>
    </div>
  )
}

//rfc
//react
//functional
//component