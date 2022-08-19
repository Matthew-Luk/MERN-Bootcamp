import './App.css';
import Form from './components/Form';
import {useState} from 'react'
import Box from './components/Box';

function App() {

  const [color,setColor] = useState("")
  const [listColor,setListColor] = useState([])

  return (
    <div className="App">
      <Form color={color} setColor={setColor} listColor={listColor} setListColor={setListColor}/>
      {
        listColor.map((item,index) => (<Box key={index} color={item}/>))
      }
    </div>
  );
}

export default App;
