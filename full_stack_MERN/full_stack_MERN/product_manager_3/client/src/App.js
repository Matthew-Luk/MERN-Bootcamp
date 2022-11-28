import React from 'react';
import {BrowserRouter, Routes, Router, Route, Navigate} from 'react-router-dom';
import Main from './views/Main';
import OneProduct from './components/OneProduct';
import Update from './components/Update';

function App() {
  return(
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Navigate to ='/home'/>}/>
            <Route element={<Main/>} path="/home" default />
            <Route element={<OneProduct/>} path="/product/:id" />
            <Route element={<Update />} path="/product/edit/:id" />
          </Routes>
        </BrowserRouter>
      </div>
    ) 
  }

export default App;