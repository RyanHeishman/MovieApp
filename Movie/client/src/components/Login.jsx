import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { userContext } from "../context/userContext";

const Login = (props) => {

    const { loggedInUser, setLoggedInUser } = useContext(userContext);

    const [userLogin, setUserLogin] = useState({
        email: '',
        password: '',
    })

    const navigate = useNavigate()
    const [errors, setErrors] = useState({})
    
    const changeHandler = (e) => {
        setUserLogin({...userLogin, [e.target.name]: e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/loginUser', userLogin, {withCredentials:true})
        .then((res)=>{
            setLoggedInUser(res.data);
            window.localStorage.setItem('userId', res.data._id)
            navigate('/movies')
        })
        .catch((err)=>{
            console.log(err)
            setErrors(err)
        })
    }

    return (
        <div>
            <form onSubmit={submitHandler}>

                <div>
                    <label>Email:</label>
                    <input type="email" name="email" value={userLogin.email} onChange={changeHandler} />
                </div>

                <div>
                    <label>Password:</label>
                    <input type="password" name="password" value={userLogin.password} onChange={changeHandler} />
                </div>

                <button className="btn bg-warning">Login</button>

            </form>
        </div>
    )
}

export default Login;