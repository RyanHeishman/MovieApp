import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'

import Nav from './components/Nav'
import StartPage from './components/StartPage'
import Login from './components/LogIn'
import API from './components/API'
import GetOne from './components/GetOne'
import Home from './components/Home'

function App() {

  return (
    <>
        <Nav/>
        <Routes>
            <Route element={<Login/>} path='/login'/>
            <Route element={<GetOne/>} path='/movie/:movieId'/>
            <Route element={<Home/>} path='/home'/>
        </Routes>
    </>
  )
}

export default App
