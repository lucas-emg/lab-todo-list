import React from 'react'
import apiAuth from '../utils/apiAuth'
import { useState } from 'react'

const Signup = () => {

  const [ name, setName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ created, setCreated] = useState(false)
  const [ fail, setFail ] = useState(false)
  const [ errormsg, setError ] = useState(false)

  const errorTimer = () => {

    setFail(true)
    setTimeout(() => {
      setFail(false)
    }, 3000);
  }



  const handleSignUp = async (e) => {

    e.preventDefault()

    try {

      let newUser = {
        name,
        email,
        password
      }

      if(!newUser.name || !newUser.email || !newUser.password) {
        throw new Error ('All fields are mandatory')
      }

      await apiAuth.signUp(newUser)

      setName('')
      setEmail('')
      setPassword('')
      setCreated(true)


    } catch (error) {
      
      errorTimer()
      setError(error.message)

    }

  }


  return (
    <div className="logIn">

        
        <form onSubmit={handleSignUp}>

            {created && <p className='banner-succes'>User was created, please login!</p>}
            {fail && <p className='banner-error'>{errormsg}</p>}
            <h1>Sign up</h1>
            <input type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}></input>
            <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
            <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
            <button type="submit">Signup</button>
        </form>
    </div>
  )
}

export default Signup