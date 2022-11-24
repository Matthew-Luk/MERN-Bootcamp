import './App.css';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import Home from './components/Home';
import Word from './components/Word';
import Color from './components/Color';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Navigate to='/home'/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/:word' element={<Word/>}/>
          <Route path='/:word/:color1/:color2' element={<Color/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
