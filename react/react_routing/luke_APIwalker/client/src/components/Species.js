import React, {useEffect, useState} from 'react'
import {useParams,useNavigate} from 'react-router-dom'
import axios from 'axios'
import '../App.css';

const Species = (props) => {

    const {state,setState,number,setNumber,list,setList,data,setData} = props
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`https://swapi.dev/api/${state}/${number}`)
        .then((res) => {
            console.log(res.data)
            setData(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    },[])

    return (
        <div className='data'>
            <h1>{data.name}</h1>
            <h3>Average Height: {data.average_height}</h3>
            <h3>Average Lifespan: {data.average_lifespan}</h3>
            <h3>Classification: {data.classification}</h3>
            <h3>Language: {data.language}</h3>
        </div>
    )
}

export default Species