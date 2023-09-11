import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import './start.css'


const StartPage = (props) => {


    return (
        <div className='startBody'>
            <div>
                <div className='startDiv'>
                    <Link to={'/movies'}><button style={{backgroundColor: 'rgba(21, 255, 0, 0.589)', marginTop: '750px'}} className='btn text-light'>Start your flicklist</button></Link>
                </div>
            </div>
        </div>
    )
}

export default StartPage;