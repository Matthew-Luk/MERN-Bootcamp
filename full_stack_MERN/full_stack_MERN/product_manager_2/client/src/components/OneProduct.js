import { useEffect,useState } from "react"
import axios from 'axios'
import { useParams } from "react-router-dom"
import '../App.css';

const OneProduct = () => {

    const [product,setProduct] = useState({})
    const {id} = useParams()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
        .then((res) => {
            console.log(res.data.product[0])
            setProduct(res.data.product[0])
        })
        .catch((err) => {
            console.log(err)
        })
    },[])

    return (
        <div className="productcard">
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
        </div>
    )
}

export default OneProduct