import './App.css';
import {BrowserRouter as Router, Route, Routes, useNavigate, Navigate, useParams, BrowserRouter} from 'react-router-dom'
import {useState} from 'react'
import Home from './components/Home';
import People from './components/People';
import Planets from './components/Planets';
import Films from './components/Films';
import Species from './components/Species';
import Vehicles from './components/Vehicles';
import Starships from './components/Starships';
import Error from './components/Error';

function App() {

  const [state,setState] = useState('')
  const [number,setNumber] = useState('')
  const [list,setList] = useState([])
  const [data,setData] = useState()

  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path='/' element={<Home state={state} setState={setState} number={number} setNumber={setNumber} list={list} setList={setList} data={data} setData={setData}/>}/>
        <Route path='/people/:number' element={<People state={state} setState={setState} number={number} setNumber={setNumber} list={list} setList={setList} data={data} setData={setData}/>} />
        <Route path='/planets/:number' element={<Planets state={state} setState={setState} number={number} setNumber={setNumber} list={list} setList={setList} data={data} setData={setData}/>} />
        <Route path='/films/:number' element={<Films state={state} setState={setState} number={number} setNumber={setNumber} list={list} setList={setList} data={data} setData={setData}/>} />
        <Route path='/species/:number' element={<Species state={state} setState={setState} number={number} setNumber={setNumber} list={list} setList={setList} data={data} setData={setData}/>} />
        <Route path='/vehicles/:number' element={<Vehicles state={state} setState={setState} number={number} setNumber={setNumber} list={list} setList={setList} data={data} setData={setData}/>} />
        <Route path='/starships/:number' element={<Starships state={state} setState={setState} number={number} setNumber={setNumber} list={list} setList={setList} data={data} setData={setData}/>} />
        <Route path='/error' element={<Error/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;