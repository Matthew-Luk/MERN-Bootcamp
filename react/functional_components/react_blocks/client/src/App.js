import React from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';
import SubContents from './components/SubContents';
import Advertisement from './components/Advertisement';


function App() {
  return (
    <div className="app">
      <div className='top'>
        <Header />
      </div>
      <div className='bottom'>
        <Navigation />
        <Main >
          <div className='main-top'>
            <SubContents />
            <SubContents />
            <SubContents />
          </div>
          <div className='main-bottom'>
            <Advertisement />
          </div>
        </Main>
      </div>
    </div>
  );
}

export default App;