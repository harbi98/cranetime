import * as React from 'react';
import Navigation from './Routes';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Navigation/>
    </AuthProvider>
  );
}

export default App; 
