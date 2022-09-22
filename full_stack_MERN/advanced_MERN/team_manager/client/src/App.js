import './App.css';
import { useState } from 'react';
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import AllPlayers from './components/AllPlayers';
import AddPlayer from './components/AddPlayer';
import ManagePlayers1 from './components/ManagePlayers1';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


  const [name,setName] = useState("")
  const [position,setPosition] = useState("")

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/players/list'/>}/>
        <Route path='/players/list' element={<AllPlayers/>} />
        <Route path='/players/addplayer' element={<AddPlayer name={name} setName={setName} position={position} setPosition={setPosition}/>} />
        <Route path='/status/game/1' element={<ManagePlayers1/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
