import logo from './logo.svg';
import './App.css';
import Dojo from './components/Dojo';

function App() {
  return (
    <div className="App">
      <Dojo t1={"Learn React"} t2={"Climb Mt. Everest"} t3={"Run a marathon"} t4={"Feed the dogs"}/>
    </div>
  );
}

export default App;