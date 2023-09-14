import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import './style/genre.css'


const Horror = (props) => {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/movie')
        .then((res)=>{
            setMovies(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }, [])

    return (
        <div className='genreBody'>
            <h1>Horror</h1>
            <hr />
            <div className='gridBody'>
                <div className='grid-container'>
                {
                    movies.map((movie)=>(
                        movie.genre === 'Horror' ?
                            <div className='grid-item'>
                                <Link to={`/movies/${movie._id}`}><img className='moviePoster' src={movie.poster} alt="Movie Poster" /></Link>
                                <h6>{movie.title}</h6>
                            </div> :
                        null
                    ))
                }
                </div>
            </div>
        </div>
    )
}

export default Horror;