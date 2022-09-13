import React, { useState } from 'react';
import {BrowserRouter, Routes, Router, Route, Navigate} from 'react-router-dom';
import AuthorForm from './components/AuthorForm';
import AllAuthors from './components/AllAuthors';
import EditAuthor from './components/EditAuthor';
import './App.css';

function App() {

  const [authorList,setAuthorList] = useState([])

  const removeFromDom = (authorId) => {
    setAuthorList(authorList.filter(author => author._id != authorId))
  }

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<AllAuthors authorList={authorList} setAuthorList={setAuthorList} removeFromDom={removeFromDom}/>} default/>
        <Route path='/new' element={<AuthorForm authorList={authorList} setAuthorList={setAuthorList}/>}/>
        <Route path='/edit/:id' element={<EditAuthor />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
