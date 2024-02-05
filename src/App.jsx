import React from 'react';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './component/home'
import Login from './component/login'
import Signup from './component/signup'
import ForgotPassword from './component/forgotPassword'

function App() {
  return (
    <>
      <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App;
