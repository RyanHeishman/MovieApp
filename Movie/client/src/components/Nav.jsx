import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import logoPic from './images/letsWatchLogo.png'

const Nav = (props) => {

    const myStyle = {
        height: '80px',
        width: '100%',
        backgroundImage: 'linear-gradient(black, rgba(0, 0, 0, 0))',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    };

    const logo = {
        height: '60px',
        width: '100px',
    }

    return (
        <div>
            <nav style={myStyle}>
                <Link to={'/movies'}><img style={logo} src={logoPic} alt="" /></Link>
            </nav>
        </div>
    )
}

export default Nav;