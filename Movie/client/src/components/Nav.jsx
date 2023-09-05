import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'

const Nav = (props) => {

    const myStyle = {
        height: '55px',
        width: '100%',
        backgroundColor: 'rgb(28, 28, 28)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0 4px 2px -2px black'

    };

    const logo = {
        height: '40px',
        width: '80px',
    }

    return (
        <div>
            <nav style={myStyle}>
                <Link to={'/movies'}><img style={logo} src="letsWatchlogo.png" alt="" /></Link>
            </nav>
        </div>
    )
}

export default Nav;