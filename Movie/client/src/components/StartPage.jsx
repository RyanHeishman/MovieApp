import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import './start.css'
import photo from './images/letsWatchlogo.png'


const StartPage = (props) => {


    return (
        <div className='startBody'>
                <div className='startDiv'>
                    <h1 className='hi'>Welcome, start your<Link to={'/movies'} style={{color:'rgb(0, 183, 255)'}}><img className='flicklistPic' src={photo}/></Link></h1>
                </div>
        </div>
    )
}

export default StartPage;