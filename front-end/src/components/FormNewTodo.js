import React from 'react'
import { useState } from 'react'
import apiTodos from '../utils/apiTodos'

const FormNewTodo = ({ getAllTodos }) => {

  const [ title, setTitle ] = useState('')

  const handleCreateNewTodo = async (e) => {
  
    e.preventDefault()

    try {

      let newTodo = {
        title,
      }

      await apiTodos.createNewTodo(newTodo)

      setTitle('')

      getAllTodos()

    } catch (error) {

      console.log(error)

    }
  }

  const handleDeleteAll = async () => {

    try {

      await apiTodos.deleteAll()

      await getAllTodos()

    } catch (error) {

      console.log(error)

    }
  }



  return (
    
    <div className="form-add-todo">

        <form onSubmit={handleCreateNewTodo}>

            <input placeholder="New To Do" value={title} onChange={(e) => setTitle(e.target.value)}></input>

            <button type="submit">Add To Do</button>

            <button onClick={() => handleDeleteAll()}>Clear All To Dos</button>

        </form>

    </div>
  )
}

export default FormNewTodo