import React from 'react'

const Form = (props) => {

    const {color,setColor,listColor,setListColor} = props

    const submitHandler = (e) => {
        e.preventDefault()
        setListColor([...listColor,color])
    }

    const handleColor = (e) => {
        setColor(e.target.value)
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <label htmlFor="">Color: </label>
                <input onChange={handleColor} type="text" name='color'/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default Form