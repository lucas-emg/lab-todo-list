import React from 'react'
import "../styling/todo.style.css"
import apiTodos from '../utils/apiTodos'

const TodoItem = ({ title, id, completed, handleGetAllTodos }) => {

const deleteItem = async (id) => {
        try {
          await apiTodos.deleteTodo(id)
          await handleGetAllTodos()
        } catch (error) {
          console.log(error)
        }
      }
  return (<div className="todo-list">
              <div className="todo-item">
                <input type="checkbox"></input>
                <p>{title}</p>
                <button onClick={() => deleteItem(id)}>X</button>
            </div>
         </div>
  )
  }

export default TodoItem