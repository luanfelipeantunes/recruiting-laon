import React from 'react';
import './app/global.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './app/pages/Login';
import Register from './app/pages/Register';
import Home from './app/pages/Home';
import Movie from './app/pages/Movie';


function App() {
  return (
    <Router>

      <Routes>
        //Redirecionar para Home
        <Route path="/" element={<Login />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='/home' element={<Home />} />
        <Route path='/movie' element={<Movie />} />
      </Routes>

    </Router>
  );
}

export default App;
