import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import './style/one.css'

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
        <div className="bodyOne">
            <h1>{movie.title}</h1>
            <h6 className="info">{movie.releaseYear} • {movie.rating} • {movie.duration}m</h6>
            <img className="poster" src={movie.poster} alt={movie.title} />
            <div className="genreCirclePrnt">
                <h6 className="genreCircle">{movie.genre}</h6>
            </div>
            <h6>{movie.description}</h6>
            <hr />
            <h6>Directed By: {movie.director}</h6>
            <hr />
            <div>
                <button className="btn btn-danger" type="submit" onClick={() => deleteHandler(movie._id)}>Watched</button>
                <h6>▪</h6>
                <Link to={`edit`}><button className="btn btn-secondary">Update Movie</button></Link>
            </div>
        </div>
    )
}

export default DisplayOne;