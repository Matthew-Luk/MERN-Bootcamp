import React, {useState, useEffect} from 'react'
import axios from 'axios';

const ProductList = (props) => {

    const {productList,setProductList} = props
    console.log("productList:" + productList)

    useEffect(() => {
        axios.get("http://localhost:8000/api/product")
        .then((res) => {
            console.log("res.data:" + res.data)
            setProductList(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    },[])

    return (
        <div>
            {
                productList?.map((item,index) => (
                <div key={index}>
                    <h2>{item.title},{item.price},{item.description}</h2>
                </div>
                ))
            }
        </div>
    )
}

export default ProductList