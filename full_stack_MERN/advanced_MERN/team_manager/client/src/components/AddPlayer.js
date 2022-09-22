import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import '../App.css';

const AddPlayer = (props) => {

    const {position,setPosition,name,setName} = props
    const [error,setError] = useState("")
    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/players",{
            name,
            position
        })
            .then((res) => {
                console.log(res)
                navigate('/players/list')
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const nameHandler = (e) => {
        setName(e.target.value)
        if(e.target.value < 2){
            setError("*Name must be at least 2 characters in length.")
        }else{
            setError("")
        }
    }

    const positionHandler = (e) => {
        setPosition(e.target.value)
    }

    return (
        <div>
            <div className='navbar1'>
                <Link>Manage Players | </Link>
                <Link> Manage Player Status</Link>
            </div>
            <div className='content'>
                <div className='navbar2'>
                    <Link to={'/players/list'}>List | </Link>
                    <Link to={'/players/addplayer'}>Add Player</Link>
                </div>
                <form onSubmit={submitHandler} className='addplayerform'>
                    <h2>Add Player</h2>
                    <div>
                        <div className='addplayerdiv'>
                            <div className='addplayerinput'>
                                <label className='label1'>Player Name:</label>
                                <input onChange={nameHandler} type="text" name='' className='input1'/>
                            </div>
                            {
                                error?
                                <div className='error'>{error}</div>:""
                            }
                        </div>
                    </div>
                    <div className='addplayerinput'>
                        <label className='label1'>Preferred Position:</label>
                        <input onChange={positionHandler} type="text" name=""  className='input1'/>
                    </div>
                    {
                        error?
                        "" :
                        <div className='addplayerbtn'>
                            <input type="submit" name="" value="ADD" id='addbtn'/>
                        </div>
                    }
                </form>
            </div>
        </div>
    )
}

export default AddPlayer