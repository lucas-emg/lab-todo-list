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



  return (
    <div className="form-add-todo">
        <form onSubmit={handleCreateNewTodo}>
            <input placeholder="New To Do" value={title} onChange={(e) => setTitle(e.target.value)}></input>
            <button type="submit">Add To Do</button>
        </form>
    </div>
  )
}

export default FormNewTodo