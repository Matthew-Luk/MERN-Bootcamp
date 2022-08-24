import './App.css';
import Cards from './components/Cards'
import View from './components/View'
import {useState} from 'react'

function App() {

  const [view,setView] = useState(false)
  const [state,setState] = useState()
  const [url,setUrl] = useState(false)
  const [cardView,setCardView] = useState(false)

  return (
    <div className="App wrapper">

      {!url?
      <Cards view ={view} setView={setView} state = {state} setState={setState} url={url} setUrl = {setUrl} />
        :
        <View cardView={cardView} setCardView = {setCardView} view ={view} setView={setView} state = {state} setState={setState} url={url} setUrl = {setUrl} />
        }
    </div>
  );
}

export default App;