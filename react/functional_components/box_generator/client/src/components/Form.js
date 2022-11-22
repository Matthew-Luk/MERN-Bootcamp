import React from 'react'
import '../App.css';

const Form = (props) => {

    const {color,setColor,listColor,setListColor} = props

    const submitHandler = (e) => {
        e.preventDefault()
        setListColor([...listColor,color])
        setColor("")
    }

    const handleColor = (e) => {
        setColor(e.target.value)
    }

    return (
        <div>
            <form className='form' onSubmit={submitHandler}>
                <label htmlFor="color">Color: </label>
                <input id='color_input' onChange={handleColor} type="text" name='color' value={color}/>
                <input id='btn' type="submit" value="Add"/>
            </form>
        </div>
    )
}

export default Form