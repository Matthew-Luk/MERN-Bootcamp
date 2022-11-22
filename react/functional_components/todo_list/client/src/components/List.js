import React from 'react'
import '../App.css';

const List = (props) => {
    const {todoList,setTodoList} = props

    const clickHandler = (index) => {
        const list = todoList
        const obj = list[index]
        obj.completed = !obj.completed
        setTodoList([...list])
    }

    const deleteHandler = (index) => {
        const newList = todoList.filter((item,idx) => {
            return idx !== index
        })
        setTodoList([...newList])
    }

    return (
        <div className='container'>
            <h2>To Do List: </h2>
            {
                todoList.map((item,index) => (
                    <div className='item' key={index}>
                        <h3 style={item.completed?{textDecoration: 'line-through'}:null}>To do: {item.todo}</h3>
                        <input onChange={()=>clickHandler(index)} type="checkbox"></input>
                        <button className='btn2' onClick={()=>deleteHandler(index)}>Delete</button>
                    </div>
                ))
            }
        </div>
    )
}

export default List