import React from 'react'

const Box = (props) => {

    const {color} = props

    const styledDiv = {
        display: 'inline-block',
        margin: '10px',
        height: '100px',
        width: '100px',
        backgroundColor: color
    }

    return (
        <div style={styledDiv}>
        </div>
    )
}

export default Box