import { useEffect,useState } from "react"
import axios from 'axios'
import { useParams , useNavigate , Link} from "react-router-dom"
import '../App.css';

const OneProduct = () => {

    const [product,setProduct] = useState({})
    const {id} = useParams()
    const navigate = useNavigate()

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

    const handleDelete = () => {
        axios.delete(`http://localhost:8000/api/product/${id}`)
        .then((res) => {
            console.log(res)
            navigate('/home')
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
        <div className="productcard">
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <button><Link to={`/product/edit/${id}`}>Edit</Link></button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default OneProduct