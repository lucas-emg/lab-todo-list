
import './styling/todo.style.css';
import Nav from './components/Nav';
import Todo from './components/Todo';
import FormNewTodo from './components/FormNewTodo';

function App() {



  return (
    <div className="App">
      <Nav/>
      <FormNewTodo/>
      <Todo/>
    </div>
  );
}

export default App;
