import React, { useState } from 'react'
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import '../App.css';

const Main = (props) => {

    const [productList, setProductList] = useState([])

    const removeFromDom = (productId) => {
        setProductList(productList.filter(product => product._id != productId))
    }

    return (
        <div className='main'>
            <ProductForm productList={productList} setProductList={setProductList} />
            <hr/>
            <ProductList productList={productList} setProductList={setProductList} removeFromDom={removeFromDom}/>
        </div>
    )
}

export default Main;