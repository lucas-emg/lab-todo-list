import React from 'react'
import Nav from './Nav';
import { useEffect, useState } from 'react'
import apiTodos from '../utils/apiTodos'
import Todo from './Todo';
import FormNewTodo from './FormNewTodo';
import { useNavigate } from 'react-router-dom'
import loadingGif from '../images/loading-buffering.gif'

const Home = () => {

    const [ todos, setTodos ] = useState('')
    const navigate = useNavigate()

    const handleGetAllTodos = async () => {
      const allTodos = await apiTodos.getAllTodos()
      setTodos(allTodos)
    }
  
    useEffect(() => {
      if(!localStorage.getItem('token')) {
        navigate('/')
      }

      handleGetAllTodos()
    }, [])
    
  return (
    <div>
      <Nav/>
      <FormNewTodo getAllTodos={handleGetAllTodos}/>
      {todos 
      ? <Todo todos={todos} handleGetAllTodos={handleGetAllTodos}/> 
      : <div className="loading"><img src={loadingGif} alt="Loading..." /></div>}
    </div>
  )
}

export default Home