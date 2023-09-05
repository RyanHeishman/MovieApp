import React, { useState } from "react";
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import './form.css'

const MovieForm = (props) => {

    const [movie, setMovie] = useState({
        title: '',
        genre: '',
        director: '',
        releaseYear: 0,
        duration: 0,
        rating: '',
        poster: '',
        description: ''
    })

    const [errors, setErrors] = useState({})
    const navigate = useNavigate()

    const handleMovie = (e) => {
        setMovie({...movie, [e.target.name]: e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/movie', movie)
            .then((res)=>{
                navigate('/movies')
            })
            .catch((err)=>{
                setErrors(err.response.data.errors)
            })
    }

    const selectStyle = {
        width: '200px'
    }

    return (
        <div className="bodyForm">
            <h1>Add a movie</h1>
            <form onSubmit={submitHandler}>
                <div>
                    <input placeholder="Title" type="text" name="title" value={movie.title} onChange={handleMovie} />
                </div>
                {
                    errors.title ?
                        <p>{errors.title.message}</p> :
                        null
                }

                <div>
                    <select placeholder="Genre" type="select" name="genre" value={movie.genre} onChange={handleMovie}>
                        <option selected value="s"> -- select a genre -- </option>
                        <option value="Action">Action</option>
                        <option value="Comedy">Comedy</option>
                        <option value="Drama">Drama</option>
                        <option value="Horror">Horror</option>
                        <option value="Sci-fi">Sci-fi</option>
                    </select>
                </div>
                {
                    errors.genre ?
                        <p>{errors.genre.message}</p> :
                        null
                }

                <div>
                    <input placeholder="Director" type="text" name="director" value={movie.director} onChange={handleMovie} />
                </div>
                {
                    errors.director ?
                        <p>{errors.director.message}</p> :
                        null
                }

                <div>
                    <label htmlFor="releaseYear">Release Year:</label>
                    <input placeholder="Release Year" type="text" name="releaseYear" value={movie.releaseYear} onChange={handleMovie} />
                </div>
                {
                    errors.releaseYear ?
                        <p>{errors.releaseYear.message}</p> :
                        null
                }


                <div>
                    <label htmlFor="duration">Duration:</label>
                    <input placeholder="Duration" type="text" name="duration" value={movie.duration} onChange={handleMovie} />
                </div>
                {
                    errors.duration ?
                        <p>{errors.duration.message}</p> :
                        null
                }

                <div>
                    <select name="rating" value={movie.rating} onChange={handleMovie}>
                        <option value> -- select a rating -- </option>
                        <option value="G">G</option>
                        <option value="PG">PG</option>
                        <option value="PG-13">PG-13</option>
                        <option value="R">R</option>
                        <option value="MA">MA</option>
                    </select>
                </div>
                {
                    errors.rating ?
                        <p>{errors.rating.message}</p> :
                        null
                }

                <div>
                    <input placeholder="Poster" type="text" name="poster" value={movie.poster} onChange={handleMovie} />
                </div>
                {
                    errors.poster ?
                        <p>{errors.poster.message}</p> :
                        null
                }

                <div>
                    <input className="descriptionInput" placeholder="Description" type="text" name="description" value={movie.description} onChange={handleMovie} />
                </div>
                {
                    errors.description ?
                        <p>{errors.description.message}</p> :
                        null
                }

                <button type="submit">Add Movie</button>
            </form>
        </div>
    )
}

export default MovieForm;