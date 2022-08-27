import logo from './logo.svg';
import All from './components/All'
import Footer from './components/Footer'
import Nav from './components/Nav'
import One from './components/One'
import './App.css';
import {useState} from 'react'

function App() {

  const [meals,setMeals] = useState([])
  const [url,setUrl] = useState('')
  const [dessert,setDessert] = useState('')

  return (
    <div className="App">
      <Nav/>
      {!url?
        <All meals={meals} setMeals={setMeals} url={url} setUrl={setUrl}/>:
        <One meals={meals} setMeals={setMeals} url={url} setUrl={setUrl} dessert={dessert} setDessert={setDessert}/>
      }
      <Footer/>
    </div>
  );
}

export default App;