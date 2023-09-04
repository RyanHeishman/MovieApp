import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import './home.css'

const DisplayAll = (props) => {

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
        <div>
            <Link to={'/movies/add'}>Add Movie</Link>
            
            <h1>Action</h1>
            <div className='movieRow'>
            {
                movies.map((movie)=>(
                    movie.genre === 'action' ?
                    <div>
                        <div className='m-2'>
                        {/* <p className='movieTitle'><Link to={`${movie._id}`}>{movie.title}</Link></p> */}
                            {/* <p>{movie.genre}</p>
                            <p>{movie.director}</p>
                            <p>{movie.duration}</p>
                            <p>{movie.rating}</p>
                            <p>{movie.description}</p> */}
                            <Link to={`${movie._id}`}><img className='moviePoster' src={movie.poster} alt="Movie Poster" /></Link>
                        </div>
                    </div> :
                    null
                ))
            }
            </div>
            
            <h1>Comedy</h1>
            <div className='movieRow'>
            {
                movies.map((movie)=>(
                    movie.genre === 'comedy' ?
                    <div>
                        <div className='m-2'>
                        {/* <p><Link to={`${movie._id}`}>{movie.title}</Link></p> */}
                            {/* <p>{movie.genre}</p>
                            <p>{movie.director}</p>
                            <p>{movie.duration}</p>
                            <p>{movie.rating}</p>
                            <p>{movie.description}</p> */}
                            <Link to={`${movie._id}`}><img className='moviePoster' src={movie.poster} alt="Movie Poster" /></Link>
                        </div>
                    </div> :
                    null
                ))
            }
            </div>

            <h1>Drama</h1>
            <div className='movieRow'>
            {
                movies.map((movie)=>(
                    movie.genre === 'drama' ?
                    <div>
                        <div className='m-2'>
                            {/* <p><Link to={`${movie._id}`}>{movie.title}</Link></p> */}
                            {/* <p>{movie.genre}</p>
                            <p>{movie.director}</p>
                            <p>{movie.duration}</p>
                            <p>{movie.rating}</p>
                            <p>{movie.description}</p> */}
                            <Link to={`${movie._id}`}><img className='moviePoster' src={movie.poster} alt="Movie Poster" /></Link>
                        </div>
                    </div> :
                    null
                ))
            }
            </div>
            
            <h1>Sci-fi</h1>
            <div className='movieRow'>
            {
                movies.map((movie)=>(
                    movie.genre === 'sci-fi' ?
                    <div>
                        <div className='m-2'>
                            {/* <p><Link to={`${movie._id}`}>{movie.title}</Link></p> */}
                            {/* <p>{movie.genre}</p>
                            <p>{movie.director}</p>
                            <p>{movie.duration}</p>
                            <p>{movie.rating}</p>
                            <p>{movie.description}</p> */}
                            <Link to={`${movie._id}`}><img className='moviePoster' src={movie.poster} alt="Movie Poster" /></Link>
                        </div>
                    </div> :
                    null
                ))
            }
            </div>

            <h1>Horror</h1>
            <div className='movieRow'>
            {
                movies.map((movie)=>(
                    movie.genre === 'horror' ?
                    <div>
                        <div className='m-2'>
                            {/* <p><Link to={`${movie._id}`}>{movie.title}</Link></p> */}
                            {/* <p>{movie.genre}</p>
                            <p>{movie.director}</p>
                            <p>{movie.duration}</p>
                            <p>{movie.rating}</p>
                            <p>{movie.description}</p> */}
                            <Link to={`${movie._id}`}><img className='moviePoster' src={movie.poster} alt="Movie Poster" /></Link>
                        </div>
                    </div> :
                    null
                ))
            }
            </div>
        </div>
    )
}

export default DisplayAll;