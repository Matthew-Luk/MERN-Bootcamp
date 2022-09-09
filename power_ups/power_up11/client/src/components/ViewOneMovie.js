import React from 'react'
import { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const ViewOneMovie = () => {

    const [movie,setMovie] = useState({})
    const [state,setState] = useState("")
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/v1/movies/${id}`)
        .then((res)=>{
            console.log(res)
            setMovie(res.data.movie[0])
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])

    const handleDelete = () => {
        axios.delete(`http://localhost:8000/api/v1/movies/${id}`)
        .then((res) => {
            console.log(res)
            navigate('/movies')
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
        <div>
            <h3>Movie View<Link to='/movies'><button>All Movies</button></Link></h3>
            <div>
                <h4>{movie.title? movie.title:"...loading"}</h4>
                <img src={movie.boxArt} alt="Movie Image" />
                <h4>Genre: {movie.genre}</h4>
                <h4>Duration: {movie.duration}</h4>
                <h4>Rating: {movie.rating}</h4>
                <h4>Actors: {movie.actors}</h4>
                <h4>Is Kid Friendly: {movie.isKidFriendly?"Yes":"No"}</h4>
                <h4>Release Year: {movie.releaseYear}</h4>
                <div>
                    <button onClick={handleDelete}>Delete</button>
                    <Link to={`/movies/${movie._id}/edit`}><button>Edit</button></Link>
                </div>
            </div>
        </div>
    )
}

export default ViewOneMovie