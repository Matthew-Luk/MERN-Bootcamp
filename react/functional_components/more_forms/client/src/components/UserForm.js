import React, {useState} from 'react'

const UserForm = (props) => {
    const [ firstName, setFirstName] = useState("")
    const [ firstNameError, setFirstNameError] = useState("")
    const [ lastName,setLastName] = useState("")
    const [ lastNameError, setLastNameError] = useState("")
    const [ email,setEmail] = useState("")
    const [ emailError, setEmailError] = useState("")
    const [ password,setPassword] = useState("")
    const [ passwordError,setPasswordError] = useState("")
    const [ confirmPassword,setConfirmPassword] = useState("")
    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 2){
            setFirstNameError("First name must be at least 2 characters")
        }else{
            setFirstNameError("")
        }
    }
    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 2){
            setLastNameError("Last name must be at least 2 characters")
        }else{
            setLastNameError("")
        }
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 5){
            setEmailError("Email be at least 5 characters")
        }else{
            setEmailError("")
        }
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 8){
            setPasswordError("Password must be at least 8 characters")
        }else{
            setPasswordError("")
        }
    }
    const passwordMatch = (e) => {
        setPassword(e.target.value);

    }
    return (
        <form onSubmit={ (e) => e.preventDefault() }>
            <div>
                <label htmlFor="firstname">First name: </label>
                <input type="text" name="firstname" onChange={ handleFirstName }></input>
                {
                    firstNameError ?
                    <p>{firstNameError}</p>:
                    ''
                }
            </div>
            <div>
                <label htmlFor='lastname'>Last name: </label>
                <input type="text" name="lastname" onChange={ handleLastName }></input>
                {
                    lastNameError ?
                    <p>{lastNameError}</p>:
                    ''
                }
            </div>
            <div>
                <label htmlFor='email'>Email: </label>
                <input type="text" name='email' onChange={ handleEmail }></input>
                {
                    emailError ?
                    <p>{emailError}</p>:
                    ''
                }
            </div>
            <div>
                <label htmlFor='password'>Password: </label>
                <input type="password" name='password' onChange={ handlePassword }></input>
                {
                    passwordError ?
                    <p>{passwordError}</p>:
                    ''
                }
            </div>
            <div>
                <label htmlFor='confirmPassword'>Confirm Password: </label>
                <input type="password" name='confirmPassword' onChange={(e) => setConfirmPassword(e.target.value)}></input>
            </div>
                {confirmPassword !== password ? <p>Passwords must match</p> : null}
            <input type="submit" value="Create User"></input>
            <div>
                <h2>Your Form Data</h2>
                <p><label>First Name: </label>{ firstName }</p>
                <p><label>Last Name: </label>{ lastName }</p>
                <p><label>Email: </label>{ email }</p>
                <p><label>Password: </label>{ password }</p>
                <p><label>Confirm Password: </label>{ confirmPassword }</p>
            </div>
        </form>
    )
}

export default UserForm