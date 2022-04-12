import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import ErrorPage from './components/ErrorPage';
import Logout from './components/Logout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="rejestracja" element={<SignUp />} />
        <Route path="logowanie" element={<Login />} />
        <Route path="wylogowano" element={<Logout />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
