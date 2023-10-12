import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import { userContext } from "../context/userContext";
import GetOne from './GetOne';

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
        <div>
            <h1>Hi</h1>
            <div>
                {
                    movies.map((movie, key) => (
                        <p>{movie.title}</p>
                    ))
                }
            </div>
        </div>
    )
}

export default Home;