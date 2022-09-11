import React, { useEffect} from 'react'
import axios from 'axios';
import { Link, useParams , useNavigate} from 'react-router-dom';
import '../App.css';

const ProductList = (props) => {

    const {id} = useParams()
    const navigate = useNavigate()
    const {removeFromDom,productList,setProductList} = props

    useEffect(() => {
        axios.get("http://localhost:8000/api/product")
        .then((res) => {
            console.log("res.data:" , res.data.products)
            setProductList(res.data.products)
        })
        .catch((err) => {
            console.log(err)
        })
    },[])

    const handleDelete = (productId) => {
        axios.delete("http://localhost:8000/api/product/" + productId)
        .then((res) => {
            removeFromDom(productId)
            navigate('/home')
        })
        .catch((err) => {
            console.log(err)
        })
    }


    return (
        <div>
            <h3>All Products:</h3>
            {
                productList.map((item,index) => (
                <div className='allproducts' key={index}>
                    <div>
                        <Link to={`/product/${item._id}`}> {item.title}</Link>
                    </div>
                    <div className='allproductsbtn'>
                        <button className='btn'><Link to={`/product/edit/${item._id}`}>Edit</Link></button>
                        <button className='btn' onClick={(e) => {handleDelete(item._id)}}>Delete</button>
                    </div>
                </div>
                ))
            }
        </div>
    )
}

export default ProductList