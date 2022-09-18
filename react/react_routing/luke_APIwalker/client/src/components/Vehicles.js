import React, {useEffect, useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import axios from 'axios'
import '../App.css';

const Vehicles = (props) => {

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
            navigate('/error')
        })
    },[])

    return (
        <div className='data'>
            <h1>{data.name}</h1>
            <h3>Model: {data.model}</h3>
            <h3>Length: {data.length}</h3>
            <h3>Passengers: {data.passengers}</h3>
            <h3>Vehicle Class: {data.vehicle_class}</h3>
        </div>
    )
}

export default Vehicles