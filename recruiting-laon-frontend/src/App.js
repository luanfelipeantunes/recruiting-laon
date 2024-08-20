import React from 'react';
import './app/global.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './app/pages/Login';
import Register from './app/pages/Register';
import Home from './app/pages/Home';
import Movie from './app/pages/Movie';
import { AuthProvider } from './app/Utils/Auth/AuthContext';
import ProtectedRoute from './app/Utils/Auth/ProtectedRoute';


function App() {
  return (
    <Router>

      <AuthProvider>

        <Routes>

          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<ProtectedRoute> <Register /> </ProtectedRoute>} />
          <Route path="/" element={<ProtectedRoute> <Home /> </ProtectedRoute>} />
          <Route path='/home' element={<ProtectedRoute> <Home /> </ProtectedRoute>} />
          <Route path='/movie/:id' element={<ProtectedRoute> <Movie /> </ProtectedRoute>} />

        </Routes>

      </AuthProvider>

    </Router>
  );
}

export default App;
