import './App.css';
import React, {useState} from 'react';
import Form from './components/Form';
import View from './components/View';
import PersonCard from './components/PersonCard';

function App() {

  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [newUser,setNewUser] = useState([])

  return (
    <div className="App">
      {<h2>{JSON.stringify(newUser)}</h2>}
      <Form name={name} email={email} password={password} setName={setName} setEmail={setEmail} setPassword={setPassword} newUser={newUser} setNewUser={setNewUser}/>
      <View name={name} email={email} password={password}/>
      {
        newUser.map((item,index) => (<PersonCard key={index} name={item.name} email={item.email} password={item.password}/>))
      }
    </div>
  );
}

export default App;