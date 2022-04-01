import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import apiAuth from '../utils/apiAuth'

const Login = () => {

  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ fail, setFail ] = useState(false)
  const [ errormsg, setError ] = useState('')
  const navigate = useNavigate()

  useEffect(() => {

    if(localStorage.getItem('token')) {
      console.log('we have a token')
      navigate('/todos')
    }
    
  }, [])

  const errorTimer = () => {

    setFail(true)
    setTimeout(() => {
      setFail(false)
    }, 3000);
  }



  const handleLogIn = async (e) => {

    e.preventDefault()

    try {

      let credentials = {
        email,
        password
      }

      if (!credentials.email || !credentials.password) throw new Error ('All fields are mandatory')

      await apiAuth.logIn(credentials)

      if(localStorage.getItem('token')) navigate('/todos')

    } catch (error) {

      setError(error.message)
      errorTimer()

    }

  }

  

  return (


      <div className='logIn'>
          <form onSubmit={handleLogIn}>
              {fail && <p className='banner-error'>{errormsg}</p>}
              <h1>Log In</h1>
              <input placeholder='Email' type='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
              <input placeholder='Password' type='password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
              <button type="submit">Login</button>
          </form>
      </div>

  )
}

export default Login