import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { userContext } from "../context/userContext";
import './style/getOne.css'


const options = {
    method: 'GET',
    headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZDIwOTQwZDM0Y2QzN2NlZDg5OTllOGY0MmNmOTZlOSIsInN1YiI6IjY1MWMyYTM2ZWE4NGM3MDEyZDY4ZGZkOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.D0GasxG2fxM_Wn4pWT445u_hPZKdHPsqnfNW6LWrHcQ'
    }
};
// GetOne displays a single movie's page
const GetOne = (props) => {

    const [movie, setMovie] = useState({})
    const [movieTrailer, setMovieTrailer] = useState({})


    const {loggedInUser, setLoggedInUser} = useContext(userContext);
    const id = window.localStorage.getItem('userId');
    const {movieId} = useParams()

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, options)
        // .then(response => response.json())   
        // .then(json => setResults(json.results))
        .then((res) => {
            setMovie(res.data)
        })
        .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, options)
        // .then(response => response.json())   
        // .then(json => setResults(json.results))
        .then((res) => {
            setMovieTrailer(res.data.results[0])
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <div className="getOneBody">
            <h1>{movie.title}</h1>
            <div>
                <div>
                    <img className="moviePoster" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
                    <p style={{color: 'white'}}>{movie.overview}</p>
                    <iframe width="1280" height="720" src={`https://www.youtube.com/embed/${movieTrailer.key}`}></iframe>
                    <button type="submit">Add</button>
                </div> 
            </div>
        </div>
    )
}

export default GetOne;