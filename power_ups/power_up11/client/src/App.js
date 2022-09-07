import './App.css';
import MovieAdd from './components/MovieAdd';
import MovieEdit from './components/MovieEdit';
import MovieList from './components/MovieList';
import ViewOneMovie from './components/ViewOneMovie';
import {useState} from 'react'
import {BrowserRouter as BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route element = {<Navigate to="/movies" />} path="/" />
          {/* {Create} */}
          <Route element = {<MovieAdd/>} path="/movies/add" />
          {/* {Read} */}
          <Route element = {<MovieList/>} path="/movies" />
          <Route element = {<ViewOneMovie/>} path="/movies/:id" />
          {/* {Update} */}
          <Route element = {<MovieEdit/>} path="/movies/:id/edit" />
          {/* {Delete with Axios} */}
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
