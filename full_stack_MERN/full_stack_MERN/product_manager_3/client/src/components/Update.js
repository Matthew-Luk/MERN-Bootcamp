import React, { useEffect, useState } from 'react'
import axios from 'axios';
import '../App.css';
import { useNavigate, useParams } from 'react-router-dom';

const PersonForm = (props) => {

    const {id} = useParams()
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
        .then((res) => {
            setTitle(res.data.product[0].title)
            setPrice(res.data.product[0].price)
            setDescription(res.data.product[0].description)
        })
        .catch((err) => {
            console.log(err)
        })
    },[id])

    const updateProduct = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/product/${id}`, {
            title,
            price,
            description
        })
        .then((res) => {
            console.log(res)
            navigate('/home')
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const titleHandler = (e) => {
        setTitle(e.target.value)
    }

    const priceHandler = (e) => {
        setPrice(e.target.value)
    }

    const descriptionHandler = (e) => {
        setDescription(e.target.value)
    }
    
    return (
        <>
            <form className="form" onSubmit={updateProduct}>
            <h1>Update Product</h1>
            <div className='inputblocks'>
                <label>Title</label><br/>
                <input className='input' onChange = {titleHandler} type="text" value={title}/>
            </div>
            <div className='inputblocks'>
                <label>Price $</label><br/>
                <input className='input' onChange = {priceHandler} type="text" value={price}/>
            </div>
            <div className='inputblocks'>
                <label>Description</label><br/>
                <input className='input' onChange = {descriptionHandler} type="text" value={description}/>
            </div>
            <div>
                <input className='createbtn' type="submit" value="Update"/>
            </div>
        </form>
        </>
        
    )
}
export default PersonForm;