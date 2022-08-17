import React from 'react'

const Form = (props) => {

    const {name,email,password,setName,setEmail,setPassword,setNewUser,newUser} = props

    const handleSubmit = (e) => {
        e.preventDeafault()
        const newAddition = {
            name,
            email,
            password
        }
        console.log(`Welcome ${newAddition}`)
        setNewUser([...newUser,newAddition])
    }

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const styledDiv = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: '2px solid black',
        borderRadius: '20px',
        width: '25%',
        padding: '20px'
    }

    const styledMargin = {
        display: 'flex',
        flexDirection: 'column',
        padding: '2px',
        margin: '5px',
        justifyContent: 'center',
        alignItems: 'center'
    }

    const styledBorder = {
        borderRadius: '5px',
        padding: '2px',
        height: '30px'
    }

    const styledButton = {
        backgroundColor: '#5cb85c',
        borderRadius: '5px',
        color: 'white',
        padding: '10px 20px',
        fontSize: '20px'
    }

    return (
        <div style={styledDiv}>
            <form onSubmit={handleSubmit}>
                <h2>Form</h2>
                <div style={styledMargin}>
                <label htmlFor="name">Name:</label>
                <input style={styledBorder} type="text" name="name" onChange={handleName}/>
                </div>
                <div style={styledMargin}>
                <label htmlFor="email">Email:</label>
                <input style={styledBorder} type="text" name="email" onChange={handleEmail}/>
                </div>
                <div style={styledMargin}>
                <label htmlFor="password">Password:</label>
                <input style={styledBorder} type="password" name="password" onChange={handlePassword}/>
                </div>
                <div style={styledMargin}>
                <button style={styledButton} onClick={handleSubmit}>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Form