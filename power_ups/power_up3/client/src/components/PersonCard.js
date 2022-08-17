import React from 'react'

const PersonCard = (props) => {

    const styledDiv={
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        border:'2px solid black',
        borderRadius:'20px',
        width:'25%',
        padding:'20px',
        margin:'10px'
    }

    return (
        <div style={styledDiv}>
            <h2>Person Card</h2>
            <h2>Name: {props.name}</h2>
            <h2>Email: {props.email}</h2>
            <h2>Password: {props.password}</h2>
        </div>
    )
}

export default PersonCard