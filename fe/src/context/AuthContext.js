import React, { useState, createContext } from 'react';
import axios from 'axios';

export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
  const [token, setToken] = useState();

  const loginUser = (email, password) => {
      const headers = {
        'Content-Type': 'application/json',
      }
      const data = {
          email: email,
          password: password,
      };
      try {
        axios.post('http://54.253.54.83/api/login', data, {
          headers: headers
        })
        .then((res) => {
          alert("Status Code: " + res.data.status + "\nMessage: " + res.data.message);
          localStorage.setItem('token', res.data.token);
          setToken(localStorage.getItem('token'));
          window.location.reload();
        })
        .catch((error) => {
          alert("Status Code: " + error.response.data.status + "\nMessage: " + error.response.data.message);
        })
      } catch(e) {
        //console.log(e);
      }
  }
  const logoutUser = () => {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    }
    const data = {

    }
    try {
      axios.post('http://54.253.54.83/api/logout', data, {
        headers: headers
      })
      .then((res) => {
        alert("Status Code: " + res.data.status + "\nMessage: " + res.data.message);
        setToken();
        localStorage.removeItem('token');
        window.location.reload();
      })
      .catch((error) => {
        alert("Status Code: " + error.response.data.status + "\nMessage: " + error.response.data.message);
        setToken();
        window.location.reload();
      })
    } catch(e) {
      //console.log(e);
    }
  }
  return (
      <AuthContext.Provider value={{
          loginUser,
          logoutUser,
          token
      }}>{children}</AuthContext.Provider>
  );
}

export default AuthContext;