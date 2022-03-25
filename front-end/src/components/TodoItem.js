import React from 'react'
import "../styling/todo.style.css"
import { useEffect, useState } from 'react'
import apiTodos from '../utils/apiTodos'



const TodoItem = ({ todo, handleGetAllTodos }) => {

const deleteItem = async (id) => {
        try {
          await apiTodos.deleteTodo(id)
          await handleGetAllTodos()
        } catch (error) {
          console.log(error)
        }
      }
  return ( todo
          ? <div className="todo-list">
              <div className="todo-item">
                <input type="checkbox"></input>
                <p>{todo.title}</p>
                <button onClick={() => deleteItem(todo._id)}>X</button>
            </div>
         </div>
         : <p>Loading...</p>
  )
  }

export default TodoItem