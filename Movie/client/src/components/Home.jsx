import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import { userContext } from "../context/userContext";
import './style/home.css'

const options = {
    method: 'GET',
    headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZDIwOTQwZDM0Y2QzN2NlZDg5OTllOGY0MmNmOTZlOSIsInN1YiI6IjY1MWMyYTM2ZWE4NGM3MDEyZDY4ZGZkOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.D0GasxG2fxM_Wn4pWT445u_hPZKdHPsqnfNW6LWrHcQ'
    }
};

const Home = (props) => {

    const [movies, setMovies] = useState([])
    const [list, setList] = useState([])

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
        axios.get(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`, options)
        .then((res) => {
            setMovies(res.data.results)
            console.log('movies: ', movies)
        })  
        .catch(err => console.log(err))
    }, [])

    return (
        <div className='homeBody'>
            <h2 className='genre'>Action</h2>
            <div className='movieRow'>
                {
                    movies.map((movie, key) => (
                        movie.genre_ids.includes(28) ?
                        <div>
                            <div className='movieBox'>
                                <a href={`/movie/${movie.id}`}><img className='moviePoster' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" /></a>
                                <p className='movieTitle'>{movie.title}</p>
                            </div>
                        </div> :
                        null
                    ))
                }
            </div>

            <h2 className='genre'>Comedy</h2>
            <div className='movieRow'>
                {
                    movies.map((movie, key) => (
                        movie.genre_ids.includes(35) ?
                        <div>
                            <div className='movieBox'>
                                <a href={`/movie/${movie.id}`}><img className='moviePoster' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" /></a>
                                <p className='movieTitle'>{movie.title}</p>
                            </div>
                        </div> :
                        null
                    ))
                }
            </div>

            <h2 className='genre'>Drama</h2>
            <div className='movieRow'>
                {
                    movies.map((movie, key) => (
                        movie.genre_ids.includes(18) ?
                        <div>
                            <div className='movieBox'>
                                <a href={`/movie/${movie.id}`}><img className='moviePoster' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" /></a>
                                <p className='movieTitle'>{movie.title}</p>
                            </div>
                        </div> :
                        null
                    ))
                }
            </div>

            <h2 className='genre'>Horror</h2>
            <div className='movieRow'>
                {
                    movies.map((movie, key) => (
                        movie.genre_ids.includes(27) ?
                        <div>
                            <div className='movieBox'>
                                <a href={`/movie/${movie.id}`}><img className='moviePoster' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" /></a>
                                <p className='movieTitle'>{movie.title}</p>
                            </div>
                        </div> :
                        null
                    ))
                }
            </div>

            <h2 className='genre'>Documentary</h2>
            <div className='movieRow'>
                {
                    movies.map((movie, key) => (
                        movie.genre_ids.includes(99) ?
                        <div>
                            <div className='movieBox'>
                                <a href={`/movie/${movie.id}`}><img className='moviePoster' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" /></a>
                                <p className='movieTitle'>{movie.title}</p>
                            </div>
                        </div> :
                        null
                    ))
                }
            </div>
        
            <h2 className='genre'>Romance</h2>
            <div className='movieRow'>
                {
                    movies.map((movie, key) => (
                        movie.genre_ids.includes(10749) ?
                        <div>
                            <div className='movieBox'>
                                <a href={`/movie/${movie.id}`}><img className='moviePoster' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" /></a>
                                <p className='movieTitle'>{movie.title}</p>
                            </div>
                        </div> :
                        null
                    ))
                }
            </div>

            <h2 className='genre'>Sc-Fi</h2>
            <div className='movieRow'>
                {
                    movies.map((movie, key) => (
                        movie.genre_ids.includes(878) ?
                        <div>
                            <div className='movieBox'>
                                <a href={`/movie/${movie.id}`}><img className='moviePoster' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" /></a>
                                <p className='movieTitle'>{movie.title}</p>
                            </div>
                        </div> :
                        null
                    ))
                }
            </div>

        </div>
    )
}

export default Home;