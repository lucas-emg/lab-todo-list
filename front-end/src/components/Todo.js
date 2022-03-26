import React from 'react'
import TodoItem from './TodoItem'
import catRelax from '../images/cat-cats.gif'



const Todo = ({todos, handleGetAllTodos}) => {
 
  return (<main className="main-todo-body">
            { todos.length ?
              todos.map(todo => <TodoItem title={todo.title} key={todo._id} id={todo._id} completed={todo.completed} handleGetAllTodos={handleGetAllTodos}/>)
              : <div className='all-caught-up'>
              <p>Well, you either have finished all you had to do or you're here to plan your day</p>
              <p>If you have tasks to do, you can add them above</p>
              <p>if you are all caught up, sit down and relax - you deserve it!</p>
              <img src={catRelax} alt='cat relaxing'/>
              </div>}

          </main>
  )
}

export default Todo