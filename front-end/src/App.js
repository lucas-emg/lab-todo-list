
import './styling/todo.style.css';
import Nav from './components/Nav';
import { useEffect, useState } from 'react'
import apiTodos from './utils/apiTodos'
import Todo from './components/Todo';
import FormNewTodo from './components/FormNewTodo';

function App() {

  const [ todos, setTodos ] = useState([])

  const handleGetAllTodos = async () => {
    const allTodos = await apiTodos.getAllTodos()
    setTodos(allTodos)
  }

  useEffect(() => {
    handleGetAllTodos()
  }, [])



  return (
    <div className="App">
      <Nav/>
      <FormNewTodo getAllTodos={handleGetAllTodos()}/>
      <Todo todos={todos} getAllTodos={handleGetAllTodos()}/>
    </div>
  );
}

export default App;
