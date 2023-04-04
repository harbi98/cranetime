import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import LoginReset from './components/LoginReset';
import LoginBlocked from './components/LoginBlocked';
import Home from './components/Home';

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Authentication */}
          <Route exact path='/' element={<Login/>}/>
          <Route exact path='/reset' element={<LoginReset/>}/>
          <Route exact path='/login_blocked' element={<LoginBlocked/>}/>
          <Route exact path='/home' element={<Home/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App; 
