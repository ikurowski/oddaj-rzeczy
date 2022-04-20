import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Logout from './components/Logout';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="rejestracja" element={<SignUp />} />
        <Route path="logowanie" element={<Login />} />
        <Route path="wylogowano" element={<Logout />} />
      </Routes>
    </Router>
  );
}

export default App;
