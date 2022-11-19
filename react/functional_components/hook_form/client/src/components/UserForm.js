import React, {useState} from 'react'

const UserForm = (props) => {
    const [ firstName, setFirstName ] = useState("")
    const [ lastName, setLastName ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ confirmPassword, setConfirmPassword ] = useState("")

    const createUser = (e) => {
        e.preventDefault();
        const newUser = {firstName, lastName, email, password, confirmPassword}
        console.log("Welcome", newUser)
        setFirstName("")
        setLastName("")
        setEmail("")
        setPassword("")
        setConfirmPassword("")
    }

    // I wanted to try two different ways of handling inputs
    const firstNameHandler = (e) => {
        setFirstName(e.target.value)
    }

    return (
        <form className='form' onSubmit={createUser}>
            <div className='styledDiv'>
                <label htmlFor="firstname">First name: </label>
                <input type="text" name="firstname" onChange={firstNameHandler} value={firstName}></input>
            </div>
            <div className='styledDiv'>
                <label htmlFor='lastname'>Last name: </label>
                <input type="text" name="lastname" onChange={(e) => setLastName(e.target.value)} value={lastName}></input>
            </div>
            <div className='styledDiv'>
                <label htmlFor='email'>Email: </label>
                <input type="text" name='email' onChange={(e) => setEmail(e.target.value)} value={email}></input>
            </div>
            <div className='styledDiv'>
                <label htmlFor='password'>Password: </label>
                <input type="password" name='password' onChange={(e) => setPassword(e.target.value)} value={password}></input>
            </div>
            <div className='styledDiv'>
                <label htmlFor='confirmPassword'>Confirm Password: </label>
                <input type="password" name='confirmPassword' onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword}></input>
            </div>
            <input id='submit_btn' type="submit" value="Create User"></input>
            <div className='dataDiv'>
                <h2>Your Form Data</h2>
                <p><label>First Name:</label> { firstName }</p>
                <p><label>Last Name:</label> { lastName }</p>
                <p><label>Email:</label> { email }</p>
                <p><label>Password:</label> { password }</p>
                <p><label>Confirm Password:</label> { confirmPassword }</p>
            </div>
        </form>
    )
}

export default UserForm