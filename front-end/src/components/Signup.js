import React from 'react'
import apiAuth from '../utils/apiAuth'
import { useState } from 'react'

const Signup = () => {

  const [ name, setName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ created, setCreated] = useState(false)



  const handleSignUp = async (e) => {

    e.preventDefault()

    try {

      let newUser = {
        name,
        email,
        password
      }

      await apiAuth.signUp(newUser)

      setName('')
      setEmail('')
      setPassword('')
      setCreated(true)


    } catch (error) {

      console.log(error)

    }

  }


  return (
    <div className="sign-up-page">

        <h1>Sign up</h1>
        <form onSubmit={handleSignUp}>
            {created && <p>User was created, please login!</p>}
            <label>Your Name</label>
            <input type='text' value={name} onChange={(e) => setName(e.target.value)}></input>
            <label>Your Email</label>
            <input type='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
            <label>Your Password</label>
            <input type='password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
            <button type="submit">Signup</button>
        </form>
    </div>
  )
}

export default Signup