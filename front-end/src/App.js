
import './styling/todo.style.css';
import './styling/nav.styling.css';
import './styling/form.styling.css'
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {



  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/todos' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
