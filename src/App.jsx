import { useState } from 'react'
import React from 'react';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './component/home'
import Login from './component/login'
import Signup from './component/signup'
import Forgotpassword from './component/forgotpassword'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgotpassword" element={<Forgotpassword />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App;
