import React from 'react'
import { useEffect, useState } from 'react'
import apiTodos from '../utils/apiTodos'



const Todo = () => {

  const [ todos, setTodos ] = useState([])
  const [ checked, setChecked ] = useState([])

  const handleGetAllTodos = async () => {
    const allTodos = await apiTodos.getAllTodos()
    setTodos(allTodos)
  }

  const deleteItem = async (id) => {
    try {
      await apiTodos.deleteTodo(id)
      await handleGetAllTodos()
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    handleGetAllTodos()
  }, [])

  return (<main className="main-todo-body">
    <div className="todo-list">{ todos.length 
          ? todos.map((todo) => {
            return <div className="todo-item">
            <input type="checkbox"></input>
            <p>{todo.title}</p>
            <button onClick={() => deleteItem(todo._id)}>X</button>
            </div>}) 
          : <p>Loading...</p> }
    </div>

    </main>
  )
}

export default Todo