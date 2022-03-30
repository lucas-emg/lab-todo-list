import React from 'react'
import Nav from './Nav';
import { useEffect, useState } from 'react'
import apiTodos from '../utils/apiTodos'
import Todo from './Todo';
import FormNewTodo from './FormNewTodo';

const Home = () => {

    const [ todos, setTodos ] = useState('')

    const handleGetAllTodos = async () => {
      const allTodos = await apiTodos.getAllTodos()
      setTodos(allTodos)
    }
  
    useEffect(() => {
      handleGetAllTodos()
    }, [])
    
  return (
    <div>
      <FormNewTodo getAllTodos={handleGetAllTodos}/>
      {todos ? <Todo todos={todos} handleGetAllTodos={handleGetAllTodos}/> : <p>Loading</p>}
    </div>
  )
}

export default Home