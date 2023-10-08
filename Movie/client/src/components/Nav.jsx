import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import logoPic from './images/letsWatchLogo.png'
import API from './API';

const Nav = (props) => {

    const myStyle = {
        height: '50px',
        width: '100%',
        backgroundColor: 'black',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',

    };

    const logo = {
        height: '70px',
        width: '120px',
    }

    return (
        <div>
            <nav style={myStyle}>
                {/* <Link to={'/movies'}><img style={logo} src={logoPic} alt="" /></Link> */}
                <Link to={'/movies'}><h1>flicklist</h1></Link>
                {/* <API/> */}
                <h1>SignIn/SignOut</h1>
            </nav>
        </div>
    )
}

export default Nav;