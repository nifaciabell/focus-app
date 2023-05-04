import {useState} from 'react';

import { Routes, Route } from 'react-router-dom';

import CreateTodo from './pages/CreateTodo';
import AuthPage from './pages/AuthPage';
import NavBar from './components/NavBar';
import RegisterForm from './pages/RegisterForm';
import UpdateForm from './pages/UpdateForm';
import { getUser } from './utilities/users-service';

import './App.css';


function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
     { user ? 
      <>
      <NavBar user={user} setUser={setUser}/>
      <Routes>
        <Route path='/todos/new' element={ <CreateTodo /> }/>
        <Route path='/todos/register' element={ <RegisterForm /> }/>
        <Route path='/todos/update' element={ <UpdateForm /> }/>
      </Routes>
      </>
     : 
      <AuthPage setUser={setUser}/>
      }
    </main>
  );
}

export default App;
