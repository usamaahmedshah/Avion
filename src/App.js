import React from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
};

export default App;
