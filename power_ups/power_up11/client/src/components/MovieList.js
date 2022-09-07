import axios from 'axios'
import React from 'react'
import { useState,useEffect } from 'react'

const MovieList = () => {

    const [movies,setMovies] = useState([])

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
        <div>
            <h3>Movie List:</h3>
                {
                    movies.map((item,idx) => (
                        <div style={{backgroundImage:`url(${item.boxArt})`,backgroundSize:"cover"}} className="card" key={idx}>{item.title}</div>
                    ))
                }
        </div>
    )
}

export default MovieList