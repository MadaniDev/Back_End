import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Home from './Pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Mall from './Pages/Mall';


function App() {
 

  return (
    <>
    {/* Menggunakan BrowerRouter untuk mengatur alamat routing halaman  */}
     <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<Mall />} />
        <Route path="/about" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </BrowserRouter>
     
    </>
  )
}

export default App
