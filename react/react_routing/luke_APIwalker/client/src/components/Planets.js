import React, {useEffect, useState} from 'react'
import {useParams,useNavigate} from 'react-router-dom'
import axios from 'axios'
import '../App.css';

const Planets = (props) => {

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
            <h3>Climate: {data.climate}</h3>
            <h3>Terrain: {data.terrain}</h3>
            <h3>Surface Water: {data.surface_water? "true":"false"}</h3>
            <h3>Population: {data.population}</h3>
        </div>
    )
}

export default Planets