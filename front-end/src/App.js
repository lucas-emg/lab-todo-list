
import './styling/todo.style.css';
import './styling/nav.styling.css';
import './styling/form.styling.css'
import './styling/login.styling.css'
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav';
import Login from './components/Login';
import Signup from './components/Signup';
import { useEffect, useState } from 'react'
import FirstPage from './components/FirstPage';


function App() {

  const [ loggedIn, setLoggedIn ] = useState(false)

  const checkLogoutButton = () => {
    if(localStorage.getItem('token')) {
      setLoggedIn(true)
    } else {
      setLoggedIn(false)
    }
  }

  useEffect(() => {
    checkLogoutButton()
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<FirstPage/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/todos' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
