import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/Dash';

function App() {
  return (
    <div className="App">
      <HelloWorld fruit1={"Mango"} fruit2={"Banana"} fruit3={"Pineapple"}/>
    </div>
  );
}

export default App;
