import './App.css';
import Nav from './components/Nav'
import All from './components/All'
import One from './components/One'
import Footer from './components/Footer'
import {useState} from 'react'
import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom'


function App() {

  const [state,setState] = useState()
  const [cardView,setCardView] = useState(false)


  return (
    <div className="App">
      <Nav/>
      <Router>
        <Routes>
          <Route path='/' element={<Navigate to ='/desserts'/>}/>
          <Route path="/desserts" element={<All state = {state} setState={setState} />}/>
          <Route path='/dessert/:id' element={<One cardView={cardView} setCardView = {setCardView}  state = {state} setState={setState}/>}/>
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;