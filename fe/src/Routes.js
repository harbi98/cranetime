import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import LoginReset from './components/LoginReset';
import LoginBlocked from './components/LoginBlocked';
import Home from './components/Home';

 export default function Navigation() {
    const [userToken, setUserToken] = useState();

    useEffect(() => {
        setUserToken(localStorage.getItem('token'));
    }, [])
    return (
        <Router>
            <Routes>
                {userToken ? <Route path="" element={<Home/>}/>: <Route path="" element={<Login/>}/>}
                <Route path="reset" element={<LoginReset/>}/>
                <Route path="login_blocked" element={<LoginBlocked/>}/>
            </Routes>
        </Router>
    );
}
