import React, {useState} from 'react'
import { Link , useNavigate} from 'react-router-dom'
import axios from 'axios'
import '../App.css';

const AuthorForm = (props) => {

    const {authorList,setAuthorList} = props
    const [name,setName] = useState("")
    const [error,setError] = useState("")
    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/authors', {
            name
        })
            .then((res) => {
                console.log(res.data)
                setAuthorList([...authorList, res.data])
                console.log(authorList)
                navigate("/")
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const nameHandler = (e) => {
        setName(e.target.value)
        if(e.target.value.length < 3){
            setError("Must be at least 3 characters")
        }else{
            setError("")
        }
    }

    return (
        <div className='card'>
            <h2>Favorite Authors</h2>
            <Link to={'/'}>Home</Link>
            <h3>Add a new author: </h3>
            <form className='form' onSubmit={submitHandler}>
                <div className='label'>
                    <label htmlFor="">Name: </label>
                </div>
                <div>
                    <input type="text" onChange={ nameHandler }></input>
                    {
                        error ?
                        <p>{error}</p>:
                        ''
                    }
                </div>
                <div className='btnrow'>
                    <Link to={'/'}><button className='btn'>Cancel</button></Link>
                    {
                        error ?
                        "":
                        <input className='btn' type="submit" name="Submit" value={'Submit'} />
                    }
                </div>
            </form>
        </div>
    )
}

export default AuthorForm