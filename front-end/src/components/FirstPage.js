import React from 'react'
import Login from './Login'
import { useState } from 'react'
import Signup from './Signup'
import acorn from '../images/acorn.png'

const FirstPage = () => {
    const [ logIn, setLogIn ] = useState(true)

  return (
    <div className="first-page">
        <div className="logo">
            <div className="logo-section">
            <h1>Little Acorns</h1>
            <img src={acorn} alt="Little Acorn logo" />
            </div>
            
            <p>Like squirrels storing acorns for the winter, one at a time.</p>
        </div>

        {logIn
        ?<Login/>
        :<Signup/>}
        
        <div className='first-page-buttons'>
            <button onClick={() => setLogIn(true)}>Log In</button>
            <button onClick={() => setLogIn(false)}>Sign Up</button>
        </div>



        
    </div>



  )
}

export default FirstPage