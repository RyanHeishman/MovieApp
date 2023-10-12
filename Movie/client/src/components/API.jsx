import React, {useState, useEffect, useContext} from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "../context/userContext";
import { FaSearch } from 'react-icons/fa'
import './style/api.css'

const options = {
    method: 'GET',
    headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZDIwOTQwZDM0Y2QzN2NlZDg5OTllOGY0MmNmOTZlOSIsInN1YiI6IjY1MWMyYTM2ZWE4NGM3MDEyZDY4ZGZkOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.D0GasxG2fxM_Wn4pWT445u_hPZKdHPsqnfNW6LWrHcQ'
    }
};

const API = (props) => {

    const navigate = useNavigate()

    const [searchResults, setSearchResults] = useState([])
    const [input, setInput] = useState('')

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
    
    const getMovie = () => {
        axios.get(`https://api.themoviedb.org/3/search/movie?query=${input}&include_adult=false&language=en-US&page=1`, options)
        .then((res) => {
            setSearchResults(res.data.results);
            // console.log("setSearchResults: ", res.data.results)
            // console.log("searchResults: ", searchResults)
        })
        .catch(err => console.log(err))
    }

    const handleChange = (value) => {
        setInput(value)
        getMovie(value)
    }

    return(
                <div className="searchBarContainer">
                    <div className="inputWrapper">
                        <FaSearch id="searchIcon" />
                        <input className="searchInput" placeholder="Type to search..." value={input} onChange={(e) => handleChange(e.target.value)}/>
                    </div>
                    {searchResults.length != 0 ?
                    <div className="resultsList">
                        {
                            searchResults.map((result) => (
                                <a href={`/movie/${result.id}`}><div className="searchResult" key={result.id}>
                                        <img style={{width: '50px', height: '80px'}} src={`https://image.tmdb.org/t/p/w500${result.poster_path}`} alt="" />
                                        <p style={{marginTop: '10px', marginLeft: '20px', color:"black"}}>{result.title}</p>
                                        <p style={{color: 'red'}}>{result.id}</p>
                                </div></a>
                            ))
                        }
                    </div>
                    : null}
                </div>
    )
}

export default API;