import React, { useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../App.css';

const ProductList = (props) => {

    const {productList,setProductList} = props
    console.log("productList:" + productList)

    useEffect(() => {
        axios.get("http://localhost:8000/api/product")
        .then((res) => {
            console.log("res.data:" , res.data.products)
            setProductList(res.data.products)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    return (
        <div>
            <h1>All Products:</h1>
            {
                productList.map((item,index) => (
                <div className='allproducts' key={index}>
                    <Link id='product' to={`/product/${item._id}`}> {item.title}</Link>
                </div>
                ))
            }
        </div>
    )
}

export default ProductList