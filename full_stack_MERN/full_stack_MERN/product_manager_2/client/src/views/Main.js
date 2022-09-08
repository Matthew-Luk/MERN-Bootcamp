import React, { useState } from 'react'
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import '../App.css';


const Main = (props) => {
    
    const [productList, setProductList] = useState([])
    
    return (
        <div className='main'>
            <ProductForm productList={productList} setProductList={setProductList} />
            <hr/>
            <ProductList productList={productList} setProductList={setProductList} />
        </div>
    )
}
export default Main;