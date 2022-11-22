import './App.css';
import Form from './components/Form';
import List from './components/List';
import {useState} from 'react'

function App() {

  const [todoList,setTodoList] = useState([])

  return (
    <div className="App">
      <Form todoList={todoList} setTodoList={setTodoList}/>
      <List todoList={todoList} setTodoList={setTodoList}/>
    </div>
  );
}

export default App;