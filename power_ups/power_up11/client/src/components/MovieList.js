import axios from 'axios'
import React from 'react'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import '../App.css';

const MovieList = () => {

    const [movies,setMovies] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios.get("http://localhost:8000/api/v1/movies")
        .then((movieList) => {
            setMovies(movieList.data.movies)
        })
        .catch((err) => {
            console.log(err)
        })
    },[])


    return (
        <div className='movie-list'>
            <h3>Movie List  <button onClick={() => navigate("/movies/add")}>Create Movie</button></h3>
                {
                    movies.map((item,idx) => (
                    <div onClick={()=>navigate(`/movies/${item._id}`)} style={{backgroundImage:`url(${item.boxArt})`,backgroundSize:"cover"}} className="card hover" key={idx}>
                        <h4>{item.title}</h4>
                    </div>
                    ))
                }
        </div>
    )
}

export default MovieList