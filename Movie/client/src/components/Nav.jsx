import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import API from './API';
import './style/nav.css'

const Nav = (props) => {

    return (
        <div className='navBody'>
            <div className='navContent'>
                <Link className='flickLink' to={'/home'}><h1>flicklist</h1></Link>
                <API className='searchBar'/>
            </div>
        </div>
    )
}

export default Nav;