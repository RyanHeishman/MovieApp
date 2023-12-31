import React, { useState, useContext, useEffect } from "react";
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import { userContext } from "../context/userContext";
import './style/form.css'
import pic from "./images/letsWatchMovieCamera.png"

const MovieForm = (props) => {

    const {loggedInUser, setLoggedInUser} = useContext(userContext);
    const id = window.localStorage.getItem('userId');

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

    useEffect(() => {
        axios.get(`http://localhost:8000/api/loggedInUser/${id}`, {withCredentials: true})
        .then((res)=>{
            console.log(res);
            setLoggedInUser(res.data)
        })
        .catch((err)=>{
            console.log(err);
        })
    }, [])

    const [errors, setErrors] = useState({})
    const navigate = useNavigate()

    const handleMovie = (e) => {
        setMovie({...movie, [e.target.name]: e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/movie', movie, {withCredentials: true})
            .then((res)=>{
                navigate('/movies')
            })
            .catch((err)=>{
                setErrors(err.response.data.errors)
            })
    }


    return (
        <div className="bodyForm">
            <form onSubmit={submitHandler}>
            <input type="hidden" value={movie.userId} />
            <img style={{height: '70px', marginLeft: '312px', marginBottom: '20px'}} src={pic} alt="" />
            <h2 className="text-center">Let's add a movie to your list</h2>
            <hr />
            <div className="middleForm">
                <div className="formLeft">
                    <div>
                        <label htmlFor="title">Title:</label>
                        <input type="text" name="title" value={movie.title} onChange={handleMovie} />
                    </div>
                    {
                        errors.title ?
                            <p>⨂ {errors.title.message}</p> :
                            null
                    }

                    <div>
                        <label htmlFor="genre">Genre: </label>
                        <select type="select" name="genre" value={movie.genre} onChange={handleMovie}>
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
                            <p>⨂ {errors.genre.message}</p> :
                            null
                    }

                    <div>
                        <label htmlFor="director">Director:</label>
                        <input type="text" name="director" value={movie.director} onChange={handleMovie} />
                    </div>
                    {
                        errors.director ?
                            <p>⨂ {errors.director.message}</p> :
                            null
                    }

                    <div>
                        <label htmlFor="releaseYear">Release Year:</label>
                        <input type="text" name="releaseYear" value={movie.releaseYear} onChange={handleMovie} />
                    </div>
                    {
                        errors.releaseYear ?
                            <p>⨂ {errors.releaseYear.message}</p> :
                            null
                    }
                </div>

                <div className="formRight">
                    <div>
                        <label htmlFor="duration">Duration:</label>
                        <input type="text" name="duration" value={movie.duration} onChange={handleMovie} />
                    </div>
                    {
                        errors.duration ?
                            <p>⨂ {errors.duration.message}</p> :
                            null
                    }

                    <div>
                        <label htmlFor="rating">Rating:</label>
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
                            <p>⨂ {errors.rating.message}</p> :
                            null
                    }

                    <div>
                        <label htmlFor="poster">Poster:</label>
                        <input type="text" name="poster" value={movie.poster} onChange={handleMovie} />
                    </div>
                    {
                        errors.poster ?
                            <p>⨂ {errors.poster.message}</p> :
                            null
                    }

                    <div>
                        <label htmlFor="description">Description:</label>
                        <input className="descriptionInput" type="text" name="description" value={movie.description} onChange={handleMovie} />
                    </div>
                    {
                        errors.description ?
                            <p>⨂ {errors.description.message}</p> :
                            null
                    }
                </div>
                </div>
                
                <div className="button">
                    <button className="btn bg-secondary text-light buttonB" type="submit">Add Movie</button>
                </div>
            </form>
          </div>  
    )
}

export default MovieForm;