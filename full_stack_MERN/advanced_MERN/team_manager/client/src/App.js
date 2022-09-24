import './App.css';
import { useState } from 'react';
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import AllPlayers from './components/AllPlayers';
import AddPlayer from './components/AddPlayer';
import ManagePlayers1 from './components/ManagePlayers1';
import ManagePlayers2 from './components/ManagePlayers2';
import ManagePlayers3 from './components/ManagePlayers3';
import EditPlayer from './components/EditPlayer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [playerList,setPlayerList] = useState([])
  const [name,setName] = useState("")
  const [position,setPosition] = useState("")

  const removeFromDom = (playerId) => {
    setPlayerList(playerList.filter(player => player._id != playerId))
  }

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/players/list'/>}/>
        <Route path='/players/list' element={<AllPlayers playerList={playerList} setPlayerList={setPlayerList} removeFromDom={removeFromDom}/>} />
        <Route path='/players/addplayer' element={<AddPlayer name={name} setName={setName} position={position} setPosition={setPosition}/>} />
        <Route path='/status/game/1' element={<ManagePlayers1 playerList={playerList}/>}/>
        <Route path='/status/game/2' element={<ManagePlayers2 playerList={playerList}/>}/>
        <Route path='/status/game/3' element={<ManagePlayers3 playerList={playerList}/>}/>
        <Route path='/players/edit/:id' element={<EditPlayer/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
