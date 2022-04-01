import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home/Home';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="rejestracja" element={<SignUp />} />
        <Route path="logowanie" element={<Login />} />
        <Route path="*" element={<ErrorPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
