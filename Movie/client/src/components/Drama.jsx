import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import './style/genre.css'


const Drama = (props) => {

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
            <h1>Drama</h1>
            <hr />
            <div className='gridBody'>
                <div className='grid-container'>
                {
                    movies.map((movie)=>(
                        movie.genre === 'Drama' ?
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

export default Drama;