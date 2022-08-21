import React, {useState} from 'react'

const styledDiv = {
    border:'2px solid black',
    padding: '20px'
}

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
        <div style={styledDiv}>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="">Todo: </label>
                    <input value={todo.todo} onChange={inputHandler} type="text"></input>
                </div>
                <div><button>Submit</button></div>
            </form>
        </div>
    )
}

export default Form