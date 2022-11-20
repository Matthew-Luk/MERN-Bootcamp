import React, {useState} from 'react'

const UserForm = (props) => {

    const [ firstName, setFirstName] = useState({name:"", error:""})
    const [ lastName, setLastName] = useState({name:"", error:""})
    const [ email, setEmail] = useState({email:"", error:""})
    const [ password, setPassword] = useState({pw:"", error:""})
    const [ confirmPassword, setConfirmPassword] = useState("")
    const [ hasBeenSubmitted, setHasBeenSubmitted] = useState(false)

    const createUser = (e) => {
        e.preventDefault()
        setFirstName({name:"", error:""})
        setLastName({name:"", error:""})
        setEmail({email:"", error:""})
        setPassword({pw:"", error:""})
        setConfirmPassword("")
        setHasBeenSubmitted(true)
    }

    const formMessage = () => {
        if( hasBeenSubmitted ) {
            return "Thank you for submitting the form!";
        } else {
            return "Welcome, please submit the form";
        }
    };

    const handleFirstName = (e) => {
        if(e.target.value.length < 2){
            setFirstName({name:"", error:"First name must be at least 2 characters"})
        }else{
            setFirstName({name:(e.target.value), error:""})
        }
    }

    const handleLastName = (e) => {
        if(e.target.value.length < 2){
            setLastName({name:"", error:"Last name must be at least 2 characters"})
        }else{
            setLastName({name:(e.target.value), error:""})
        }
    }

    const handleEmail = (e) => {
        if(e.target.value.length < 5){
            setEmail({email:"", error:"Email be at least 5 characters"})
        }else{
            setEmail({email:(e.target.value), error:""})
        }
    }

    const handlePassword = (e) => {
        if(e.target.value.length < 8){
            setPassword({pw:"", error:"Password must be at least 8 characters"})
        }else{
            setPassword({pw:(e.target.value), error:""})
        }
    }

    return (
        <form className='form' onSubmit={ createUser }>
            <h3>{formMessage()}</h3>
            <div className='styledDiv'>
                <label htmlFor="firstname">First name: </label>
                <input type="text" name="firstname" onChange={ handleFirstName } value={firstName.name}></input>
            </div>
                {firstName.error ? <p>{firstName.error}</p> : ''}
            <div className='styledDiv'>
                <label htmlFor='lastname'>Last name: </label>
                <input type="text" name="lastname" onChange={ handleLastName } value={lastName.name}></input>
            </div>
                {lastName.error ? <p>{lastName.error}</p> : ''}
            <div className='styledDiv'>
                <label htmlFor='email'>Email: </label>
                <input type="text" name='email' onChange={ handleEmail } value={email.email}></input>
            </div>
                {email.error ? <p>{email.error}</p> : ''}
            <div className='styledDiv'>
                <label htmlFor='password'>Password: </label>
                <input type="password" name='password' onChange={ handlePassword }></input>
            </div>
                {password.error ? <p>{password.error}</p> : ''}
            <div className='styledDiv'>
                <label htmlFor='confirmPassword'>Confirm Password: </label>
                <input type="password" name='confirmPassword' onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword}></input>
            </div>
            {confirmPassword !== password.pw ? <p>Passwords must match</p> : null}
            <input id='submit_btn' type="submit" value="Create User"></input>
        </form>
    )
}

export default UserForm