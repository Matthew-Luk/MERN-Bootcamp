import React, {useState} from 'react'
import '../App.css';

const Form = (props) => {

    const {todoList,setTodoList} = props
    const [todo,setTodo] = useState({})

    const submitHandler = (e) => {
        e.preventDefault()
        if(todo.todo.trim() === ""){
            return
        }
        setTodoList([...todoList,todo])
        setTodo({todo:"",completed:""})
    }

    const inputHandler = (e) => {
        setTodo({todo:e.target.value,completed:false})
    }

    return (
        <form className='form' onSubmit={submitHandler}>
            <label htmlFor="">Todo: </label>
            <input value={todo.todo} onChange={inputHandler} type="text"></input>
            <button className='btn'>Submit</button>
        </form>
    )
}

export default Form