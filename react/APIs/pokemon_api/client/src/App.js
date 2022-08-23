import './App.css';
import Script from './components/Script';
import {useState} from 'react'

function App() {

  const [state,setState] = useState([])

  return (
    <div className="App">
      <Script state={state} setState={setState}/>
    </div>
  );
}

export default App;