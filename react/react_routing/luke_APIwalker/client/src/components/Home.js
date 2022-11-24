import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams , useNavigate} from 'react-router-dom'
import '../App.css';

const Home = (props) => {

    const {state,setState,number,setNumber,list,setList,data,setData} = props
    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        axios.get(`https://swapi.dev/api/${state}`)
        .then((res) => {
            console.log(res.data)
            setData(res.data)
            navigate(`/${state}/${number}`)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const optionHandler = (e) => {
        setState(e.target.value)
    }

    const numberHandler =(e) => {
        setNumber(e.target.value)
    }

    return (
        <div>
            <form className='form' onSubmit={submitHandler}>
                <label htmlFor="search">Search For:</label>
                <select onChange={optionHandler} name="search">
                    <option value=""></option>
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                    <option value="films">Films</option>
                    <option value="species">Species</option>
                    <option value="vehicles">Vehicles</option>
                    <option value="starships">Starships</option>
                </select>
                <label htmlFor="id">ID: </label>
                <input onChange={numberHandler} type="text" name="id"/>
                <input type="submit" value='Submit'/>
            </form>
            {
                list.map((item,index) => (
                    <div key={index}>
                        <p>{item.name}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Home