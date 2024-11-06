import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import MenuPage from './components/MenuPage/MenuPage';
import Footer from './components/Footer/Footer';
import './App.css';

const App = () =>
{
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/" element={<MenuPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
