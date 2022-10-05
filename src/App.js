import React from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>
        <HomeScreen/>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
};

export default App;
