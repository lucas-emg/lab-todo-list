import React from 'react'
import "../styling/todo.style.css"
import { useState } from 'react'
import apiTodos from '../utils/apiTodos'

const TodoItem = ({ title, id, completed, handleGetAllTodos }) => {

const [ checked, setChecked ] = useState(completed)

const handleChecked = async (e) => {
  
  try {
    setChecked(e.currentTarget.checked)
    const localTodo = {
      completed: e.currentTarget.checked
    }

    console.log(id, checked)
    await apiTodos.updateTodo(id, localTodo)
    await handleGetAllTodos()
  } catch (error) {
    console.log(error)
  }
}

const deleteItem = async (id) => {
        try {
          await apiTodos.deleteTodo(id)
          await handleGetAllTodos()
        } catch (error) {
          console.log(error)
        }
      }
  return (
              <div className="todo-item">
                <input type="checkbox" checked={completed} onChange={handleChecked}></input>
                {completed ? <p className='crossed-text'>{title}</p> : <p>{title}</p>}
                <button onClick={() => deleteItem(id)}>X</button>
            </div>
         
  )
  }

export default TodoItem