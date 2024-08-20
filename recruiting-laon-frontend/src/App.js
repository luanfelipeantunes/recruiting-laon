import React from 'react';
import './app/global.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './app/pages/Login';
import Register from './app/pages/Register';
import Home from './app/pages/Home';
import Movie from './app/pages/Movie';
import { AuthProvider } from './app/Utils/Auth/AuthContext';
import ProtectedRoute from './app/Utils/Auth/ProtectedRoute';
import AllMovies from './app/pages/AllMovies';


function App() {
  return (
    <Router>

      <AuthProvider>

        <Routes>

          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />} />
          
          <Route path="/" element={<ProtectedRoute> <Home /> </ProtectedRoute>} />
          <Route path='/home' element={<ProtectedRoute> <Home /> </ProtectedRoute>} />
          <Route path='/movies/:id' element={<ProtectedRoute> <Movie /> </ProtectedRoute>} />
          <Route path='/movies' element={<ProtectedRoute> <AllMovies /> </ProtectedRoute>} />

        </Routes>

      </AuthProvider>

    </Router>
  );
}

export default App;
