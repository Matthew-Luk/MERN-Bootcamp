import axios from 'axios'
import React, { useEffect } from 'react'
import { Link , useNavigate} from 'react-router-dom'
import '../App.css';

const AllAuthors = (props) => {

    const {removeFromDom,authorList,setAuthorList} = props
    const navigate = useNavigate()

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
        .then((res) => {
            console.log(res.data.authors)
            setAuthorList(res.data.authors)
        })
        .catch((err) => {
            console.log(err)
        })
    },[])

    const handleDelete = (authorId) => {
        axios.delete("http://localhost:8000/api/authors/" + authorId)
        .then((res) => {
            removeFromDom(authorId)
            navigate('/')
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
        <div>
            <h2>Favorite Authors</h2>
            <Link to={'/new'}>Add an Author</Link>
            <h3>We have quotes by: </h3>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>Authors</th>
                        <th>Actions Available</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        authorList.map((item,index)=>(
                            <tr key={index}>
                                <td id='item_name'>{item.name}</td>
                                <td>
                                    <Link to={`/edit/${item._id}`}><button className='btn'>Edit</button></Link>
                                    <button id='delete_btn' className='btn' onClick={(e) => {handleDelete(item._id)}}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default AllAuthors