import React from 'react'

const PersonCard = (props) => {
    const {userName,userEmail,userPassword,newUser} = props
    console.log("New User",newUser)

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
            <h2>Name: {userName}</h2>
            <h2>Email: {userEmail}</h2>
            <h2>Password: {userPassword}</h2>
        </div>
    )
}

export default PersonCard