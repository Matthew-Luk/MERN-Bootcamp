import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const MovieAdd = () => {

    const [title,setTitle] = useState("")
    const [genre,setGenre] = useState("")
    const [art,setArt] = useState("")
    const [duration,setDuration] = useState("")
    const [rating,setRating] = useState("")
    const [actors,setActors] = useState("")
    const [friendly,setFriendly] = useState(false)
    const [release,setRelease] = useState("")
    const [errors,setErrors] = useState({})

    const genres = [ "",
        'Comedy',
        'Drama',
        'Horror',
        'Sci-Fi',
        'Fantasy',
        'Action',
        'Family',
        'Animated',
        'Documentary',
        'Romcom',
        'Silent Movie',
        'Thriller',
        'Crime Noir',
        'French Cinema'
    ]

    const ratings = ["",'G','PG','PG-13','R','NC-17']

    const handleTitle = (e) => {
        if(!e.target.value.trim()){
            return
        }
        setTitle(e.target.value)
    }

    const handleGenre = (e) => {
        if(!e.target.value.trim()){
            return
        }
        setGenre(e.target.value)
    }

    const handleArt = (e) => {
        if(!e.target.value.trim()){
            return
        }
        setArt(e.target.value)
    }

    const handleDuration = (e) => {
        if(!e.target.value.trim()){
            return
        }
        setDuration(e.target.value)
    }

    const handleRating = (e) => {
        if(!e.target.value.trim()){
            return
        }
        setRating(e.target.value)
    }

    const handleActors = (e) => {
        if(!e.target.value.trim()){
            return
        }
        setActors(e.target.value)
    }

    const handleFriendly = (e) => {
        if(!e.target.value.trim()){
            return
        }
        setFriendly(e.target.value)
    }

    const handleRelease = (e) => {
        if(!e.target.value.trim()){
            return
        }
        setRelease(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const movie = {
            title,
            genre,
            boxArt:art,
            duration,
            actors,
            rating,
            isKidFriendly:friendly,
            releaseYear:release
        }
        axios.post("http://localhost:8000/api/v1/movies",movie)
        .then((movie)=>{
            console.log(movie)
        })
        .catch((err)=>{
            console.log(err.reponse.data.error.errors)
            setErrors(err.reponse.data.error.errors)
        })
    }


    return (
        <div>
            <h3>Add Movie</h3>
            <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="">Title: </label>
                <input onChange={handleTitle} type="text" value={title}/>
            </div>
            <div>
                <label htmlFor="">Genre: </label>
                <select onChange={handleGenre} name="" id="" value={genre}>
                    {
                        genres.map((item,idx) => (
                            <option key={idx} value={item}>{item}</option>
                        ))
                    }
                </select>
            </div>
            <div>
                <label htmlFor="">Box Art: </label>
                <input onChange={handleArt} type="text" value={art}/>
            </div>
            <div>
                <label htmlFor="">Duration: </label>
                <input onChange={handleDuration} type="text" value={duration}/>
            </div>
            <div>
                <label htmlFor="">Rating: </label>
                <select onChange={handleRating} name="" id="" value={rating}>
                    {
                        ratings.map((item,idx) => (
                            <option key={idx} value={item}>{item}</option>
                        ))
                    }
                </select>
            </div>
            <div>
                <label htmlFor="">Actors: </label>
                <input onChange={handleActors} type="text" value={actors}/>
            </div>
            <div>
                <label htmlFor="">Is Kid Friendly</label>
            </div>
            <div>
                <label htmlFor="">Yes: </label>
                <input onChange={handleFriendly} type="radio" value="true" name='isFriendly' /> 
                <label htmlFor="">No: </label>
                <input onChange={handleFriendly} type="radio" value="false" name='isFriendly' />
            </div>
            <div>
                <label htmlFor="">Release Year: </label>
                <input onChange={handleRelease} type="text" value={release}/>
            </div>
            <div><button type='submit'>Add a Movie</button></div>
            </form>
        </div>
    )
}

export default MovieAdd