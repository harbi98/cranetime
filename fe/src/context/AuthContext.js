import React, { createContext } from 'react';
import axios from 'axios';

export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {

  const headers = {
      'Content-Type': 'application/json',
  }

  const loginUser = (email, password) => {
      const data = {
          email: email,
          password: password,
      };
      try {
        axios.post('http://127.0.0.1:8000/api/login', data, {
          headers: headers
        })
        .then((res) => {
          alert("Status Code: " + res.data.status + "\nMessage: " + res.data.message);
          localStorage.setItem('token', res.data.token);
        })
        .catch((error) => {
          alert("Status Code: " + error.response.data.status + "\nMessage: " + error.response.data.message);
        })
      } catch(e) {
        //console.log(e);
      }
  }
  return (
      <AuthContext.Provider value={{
          loginUser,
      }}>{children}</AuthContext.Provider>
  );
}

export default AuthContext;