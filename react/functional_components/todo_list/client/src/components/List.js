import React from 'react'

    const styledItem = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }

    const styledButton = {
        height: '30px',
        backgroundColor: 'red',
        color: 'white',
        border: '2px solid black',
        marginLeft: '10px'
    }


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
        <div>
            <h2>list</h2>

            {
                todoList.map((item,index) => (
                    <div style={styledItem} key={index}>
                        <h3 style={item.completed?{textDecoration: 'line-through'}:null}>To do: {item.todo}</h3>
                        <input onChange={()=>clickHandler(index)} type="checkbox"></input>
                        <button style={styledButton} onClick={()=>deleteHandler(index)}>Delete</button>
                    </div>
                ))
            }

        </div>
    )
}

export default List