import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import { userContext } from "../context/userContext";
import './style/home.css'

const DisplayAll = (props) => {

    const [movies, setMovies] = useState([])

    const {loggedInUser, setLoggedInUser} = useContext(userContext);
    const id = window.localStorage.getItem('userId');

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
        <div className='body'>
            <div className='addMovie'>
                <Link className='addMovieLink' to={'/movies/add'}>Add Movie</Link>
            </div>
            <hr />
            <Link to={'/movies/action'}><h1>Action ›</h1></Link>
            <div className='movieRow'>
            {
                movies.map((movie)=>(
                    movie.genre === 'Action' ?
                    <div>
                        <div className='m-2'>
                            <Link to={`${movie._id}`}><img className='moviePoster' src={movie.poster} alt="Movie Poster" /></Link>
                            <h6>{movie.title}</h6>
                        </div>
                    </div> :
                    null
                ))
            }
            </div>
            <hr />
            <Link to={'/movies/comedy'}><h1>Comedy ›</h1></Link>
            <div className='movieRow'>
            {
                movies.map((movie)=>(
                    movie.genre === 'Comedy' ?
                    <div>
                        <div className='m-2'>
                            <Link to={`${movie._id}`}><img className='moviePoster' src={movie.poster} alt="Movie Poster" /></Link>
                            <h6>{movie.title}</h6>
                        </div>
                    </div> :
                    null
                ))
            }
            </div>
            <hr />
            <Link to={'/movies/drama'}><h1>Drama ›</h1></Link>
            <div className='movieRow'>
            {
                movies.map((movie)=>(
                    movie.genre === 'Drama' ?
                    <div>
                        <div className='m-2'>
                            <Link to={`${movie._id}`}><img className='moviePoster' src={movie.poster} alt="Movie Poster" /></Link>
                            <h6>{movie.title}</h6>
                        </div>
                    </div> :
                    null
                ))
            }
            </div>
            <hr />
            <Link to={'/movies/sci-fi'}><h1>Sci-Fi ›</h1></Link>
            <div className='movieRow'>
            {
                movies.map((movie)=>(
                    movie.genre === 'Sci-fi' ?
                    <div>
                        <div className='m-2'>
                            <Link to={`${movie._id}`}><img className='moviePoster' src={movie.poster} alt="Movie Poster" /></Link>
                            <h6>{movie.title}</h6>
                        </div>
                    </div> :
                    null
                ))
            }
            </div>
            <hr />
            <Link to={'/movies/horror'}><h1>Horror ›</h1></Link>
            <div className='movieRow'>
            {
                movies.map((movie)=>(
                    movie.genre === 'Horror' ?
                    <div>
                        <div className='m-2'>
                            <Link to={`${movie._id}`}><img className='moviePoster' src={movie.poster} alt="Movie Poster" /></Link>
                            <h6>{movie.title}</h6>
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