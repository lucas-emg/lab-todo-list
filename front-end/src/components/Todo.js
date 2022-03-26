import React from 'react'
import TodoItem from './TodoItem'



const Todo = ({todos, handleGetAllTodos}) => {
 
  return (<main className="main-todo-body">
            { todos.length ?
              todos.map(todo => <TodoItem title={todo.title} key={todo._id} id={todo._id} completed={todo.completed} handleGetAllTodos={handleGetAllTodos}/>)
              : <div className='all-caught-up'>
              <p>Wow, looks like you are all caught up.</p>
              <p>Sit down and relax now, you deserve it!</p>
              <iframe src="https://giphy.com/embed/S3wJnSvxofF2U" width="427" height="320" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
              </div>}

          </main>
  )
}

export default Todo