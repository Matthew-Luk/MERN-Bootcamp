import React, { useState } from 'react'
import axios from 'axios';
import '../App.css';
import { useNavigate } from 'react-router-dom';

const PersonForm = (props) => {

    const {productList, setProductList} = props
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate()

    const onSubmitHandler = (e) => {

        e.preventDefault();
        axios.post('http://localhost:8000/api/product', {
            title,
            price,
            description
        })
            .then(res=>{
                console.log(res);
                console.log(res.data);
                setProductList([...productList, res.data])
                setTitle("")
                setPrice("")
                setDescription("")
                navigate('/')
            })
            .catch(err=>console.log(err))
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
            <form className="form" onSubmit={onSubmitHandler}>
            <h1>Product Manager</h1>
            <div className='inputblocks'>
                <label>Title</label><br/>
                <input className='input' type="text" onChange = {titleHandler} value={title}/>
            </div>
            <div className='inputblocks'>
                <label>Price $</label><br/>
                <input className='input' type="text" onChange = {priceHandler} value={price}/>
            </div>
            <div className='inputblocks'>
                <label>Description</label><br/>
                <input className='input' type="text" onChange = {descriptionHandler} value={description}/>
            </div>
            <div>
                <input className='createbtn' type="submit" value="Create"/>
            </div>
        </form>
        </>
        
    )
}
export default PersonForm;