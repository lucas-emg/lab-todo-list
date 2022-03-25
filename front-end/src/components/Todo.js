import React from 'react'
import TodoItem from './TodoItem'



const Todo = ({todos, handleGetAllTodos}) => {
 
  return (<main className="main-todo-body">
            {todos
            ? todos.map(todo => <TodoItem title={todo.title} key={todo._id} id={todo._id} completed={todo.completed} handleGetAllTodos={handleGetAllTodos}/>)
            : <p>Loading</p>
            }
            
          </main>
  )
}

export default Todo