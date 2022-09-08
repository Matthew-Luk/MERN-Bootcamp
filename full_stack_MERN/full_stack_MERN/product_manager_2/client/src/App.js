import React, { useState } from 'react';
import axios from 'axios';
import {BrowserRouter, Routes, Router, Route, Navigate} from 'react-router-dom';
import Main from './views/Main';
import ProductForm from './components/ProductForm';


function App() {
  return(
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Navigate to ='/home'/>}/>
            <Route element={<Main/>} path="/home" default />
          </Routes>
        </BrowserRouter>
      </div>
    ) 
  }
export default App;