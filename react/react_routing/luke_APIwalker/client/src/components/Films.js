import React, {useEffect, useState} from 'react'
import {useParams,useNavigate} from 'react-router-dom'
import axios from 'axios'
import '../App.css';

const Films = (props) => {

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
            <h1>{data.title}</h1>
            <h3>Director: {data.director}</h3>
            <h3>Producer(s): {data.producer}</h3>
            <h3>Release Date: {data.release_date}</h3>
            <h3>Opening Crawl: {data.opening_crawl}</h3>
        </div>
    )
}

export default Films