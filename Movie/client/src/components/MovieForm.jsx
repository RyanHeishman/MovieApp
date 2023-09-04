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

    return (
        <div>
            <h2>Add a movie</h2>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input type="text" name="title" value={movie.title} onChange={handleMovie} />
                </div>
                {
                    errors.title ?
                        <p>{errors.title.message}</p> :
                        null
                }

                <div>
                    <label htmlFor="genre">Genre:</label>
                    <select placeholder="-- select an option" type="select" name="genre" value={movie.genre} onChange={handleMovie}>
                        <option selected value="s"> -- select an option -- </option>
                        <option value="action">Action</option>
                        <option value="comedy">Comedy</option>
                        <option value="drama">Drama</option>
                        <option value="horror">Horror</option>
                        <option value="sci-fi">Sci-fi</option>
                    </select>
                </div>
                {
                    errors.genre ?
                        <p>{errors.genre.message}</p> :
                        null
                }

                <div>
                    <label htmlFor="director">Director:</label>
                    <input type="text" name="director" value={movie.director} onChange={handleMovie} />
                </div>
                {
                    errors.director ?
                        <p>{errors.director.message}</p> :
                        null
                }

                <div>
                    <label htmlFor="releaseYear">Release Year:</label>
                    <input type="text" name="releaseYear" value={movie.releaseYear} onChange={handleMovie} />
                </div>
                {
                    errors.releaseYear ?
                        <p>{errors.releaseYear.message}</p> :
                        null
                }


                <div>
                    <label htmlFor="duration">Duration:</label>
                    <input type="number" name="duration" value={movie.duration} onChange={handleMovie} />
                </div>
                {
                    errors.duration ?
                        <p>{errors.duration.message}</p> :
                        null
                }

                <div>
                    <label htmlFor="rating">Rating:</label>
                    <select type="text" name="rating" value={movie.rating} onChange={handleMovie}>
                        <option selected value> -- select an option -- </option>
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
                    <label htmlFor="poster">Poster:</label>
                    <input type="text" name="poster" value={movie.poster} onChange={handleMovie} />
                </div>
                {
                    errors.poster ?
                        <p>{errors.poster.message}</p> :
                        null
                }

                <div>
                    <label htmlFor="description">Description:</label>
                    <input type="text" name="description" value={movie.description} onChange={handleMovie} />
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