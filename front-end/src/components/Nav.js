import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import acorn from '../images/acorn.png'

function Nav() {

  const navigate = useNavigate()

  const handleLogOut = () => {
    localStorage.removeItem('token')
    navigate('/')
  }

  return (
    <nav>
        <img src={acorn} alt='Little Acorn logo' />
        <h1>You can do everything, one thing at a time</h1>
        <button onClick={handleLogOut}>Log out</button>
    </nav>
  )
}

export default Nav