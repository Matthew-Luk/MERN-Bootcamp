import React, {useState} from 'react'

const UserForm = (props) => {
    const [ userfirstname, setFirstname] = useState("")
    const [ userlastname,setLastname] = useState("")
    const [ useremail,setEmail] = useState("")
    const [ password,setPassword] = useState("")
    const [ confirmpassword,setConfirmpassword] = useState("")
    const createUser = (e) => {
        e.preventDefault();
        const newUser = {
            userfirstname: userfirstname,
            userlastname: userlastname,
            useremail: useremail,
            password: password,
            confirmpassword: confirmpassword
        }
        console.log("Welcome", newUser)
    }
    return (
        <form onSubmit={createUser}>
            <div>
                <label htmlFor="firstname">First name: </label>
                <input type="text" name="firstname" onChange={(e) => setFirstname(e.target.value)}></input>
            </div>
            <div>
                <label htmlFor='lastname'>Last name: </label>
                <input type="text" name="lastname" onChange={(e) => setLastname(e.target.value)}></input>
            </div>
            <div>
                <label htmlFor='email'>Email: </label>
                <input type="text" name='email' onChange={(e) => setEmail(e.target.value)}></input>
            </div>
            <div>
                <label htmlFor='password'>Password: </label>
                <input type="password" name='password' onChange={(e) => setPassword(e.target.value)}></input>
            </div>
            <div>
                <label htmlFor='confirmpassword'>Confirm Password: </label>
                <input type="password" name='confirmpassword' onChange={(e) => setConfirmpassword(e.target.value)}></input>
            </div>
            <input type="submit" value="Create User"></input>
            <div>
                <h2>Your Form Data</h2>
                <p><label>First Name: </label>{ userfirstname }</p>
                <p><label>Last Name: </label>{ userlastname }</p>
                <p><label>Email: </label>{ useremail }</p>
                <p><label>Password: </label>{ password }</p>
                <p><label>Confirm Password: </label>{ confirmpassword }</p>
            </div>
        </form>
    )
}

export default UserForm