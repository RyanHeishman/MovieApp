import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import './one.css'

const DisplayOne = (props) => {

    const [movie, setMovie] = useState({})

    const navigate = useNavigate()
    const {id} = useParams()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/movie/${id}`)
            .then((res)=>{
                setMovie(res.data)
            })
            .catch((err)=>{
                console.log(err)
            })
    }, [])

    const deleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/deleteMovie/${id}`)
            .then((res)=>{
                navigate('/movies')
            })
            .catch((err)=>{
                console.log(err)
            })
    }

    return (
        <div>
            <h1>{movie.title}</h1>
            <h6>{movie.releaseYear} • {movie.rating} • {movie.duration}m</h6>
            <img className="poster" src={movie.poster} alt={movie.title} />
            <h6>{movie.genre}</h6>
            <h6>{movie.description}</h6>
            <h6>Directed By: {movie.director}</h6>
            <div>
                <button className="bg-danger" type="submit" onClick={() => deleteHandler(movie._id)}>Watched</button>
                <Link to={`edit`}><button>Update Movie</button></Link>
            </div>
        </div>
    )
}

export default DisplayOne;