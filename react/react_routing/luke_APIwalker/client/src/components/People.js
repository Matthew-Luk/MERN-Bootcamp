import React, {useEffect, useState} from 'react'
import {useParams,useNavigate} from 'react-router-dom'
import axios from 'axios'
import '../App.css';

const People = (props) => {

    const {state,setState,number,setNumber,list,setList,data,setData} = props
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
            <h3>Height: {data.height}</h3>
            <h3>Hair Color: {data.hair_color}</h3>
            <h3>Eye Color: {data.eye_color}</h3>
            <h3>Skin Color: {data.skin_color}</h3>
        </div>
    )
}

export default People