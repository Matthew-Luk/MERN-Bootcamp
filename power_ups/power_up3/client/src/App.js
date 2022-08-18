import './App.css';
import React, {useState} from 'react';
import Form from './components/Form';
import View from './components/View';
import PersonCard from './components/PersonCard';

function App() {

  const [userName,setUserName] = useState("")
  const [userEmail,setUserEmail] = useState("")
  const [userPassword,setUserPassword] = useState("")
  const [newUser,setNewUser] = useState([])

  return (
    <div className="App">
      <h2>{JSON.stringify(newUser)}</h2>
      <Form userName={userName} userEmail={userEmail} userPassword={userPassword} setUserName={setUserName} setUserEmail={setUserEmail} setUserPassword={setUserPassword} newUser={newUser} setNewUser={setNewUser}/>
      <View userName={userName} userEmail={userEmail} userPassword={userPassword}/>
      {
        newUser.map((item,index) => (<PersonCard key={index} userName={item.userName} userEmail={item.userEmail} userPassword={item.userPassword}/>))
      }
    </div>
  );
}

export default App;