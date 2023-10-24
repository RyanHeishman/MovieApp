import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import API from './API';
import './style/nav.css'
import logo from './images/letsWatchlogo2.png'

const Nav = (props) => {

    return (
        <div className='navBody'>
            <div className='navContent'>
                {/* <Link className='flickLink' to={'/home'}><h1>flicklist</h1></Link> */}
                {/* <img className='logo' src={{logo}} alt="" /> */}
                <Link to={'/home'}><img className='logo' src={logo}></img></Link>
                <API className='searchBar'/>
            </div>
        </div>
    )
}

export default Nav;