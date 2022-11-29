import React, {useEffect, useState} from 'react'
import { Link , useNavigate , useParams} from 'react-router-dom'
import axios from 'axios'
import '../App.css';

const EditAuthor = () => {

    const [name,setName] = useState("")
    const [error,setError] = useState("")
    const navigate = useNavigate()
    const {id} = useParams()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
        .then((res) => {
            console.log(res.data.author[0])
            setName(res.data.author[0].name)
        })
        .catch((err) => {
            console.log(err)
        })
    },[])

    const updateAuthor = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/authors/${id}`, {
            name
        })
        .then((res) => {
            console.log(res)
            navigate('/')
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
            <h3>Edit this author: </h3>
            <form className='form' onSubmit={updateAuthor}>
                <div className='label'>
                    <label htmlFor="">Name: </label>
                </div>
                <div>
                    <input onChange={nameHandler} type="text" value={name}/>
                    {
                        error ?
                        <p className='error'>{error}</p>:
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

export default EditAuthor