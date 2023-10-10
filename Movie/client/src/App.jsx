import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
// import MovieForm from './oldComponents/MovieForm'
// import DisplayAll from './oldComponents/DisplayAll'
// import UpdateMovie from './oldComponents/UpdateMovie'
// import DisplayOne from './oldComponents/DisplayOne'
import Nav from './components/Nav'
import StartPage from './components/StartPage'
// import Action from './oldComponents/Action'
// import Comedy from './oldComponents/Comedy'
// import Drama from './oldComponents/Drama'
// import SciFi from './oldComponents/SciFi'
// import Horror from './oldComponents/Horror'
import Login from './components/LogIn'
import API from './components/API'
import GetOne from './components/GetOne'


function App() {

  return (
    <>
      <Nav/>
      <Routes>
        <Route element={<StartPage/>} path='/'/>
        {/* <Route element={<MovieForm/>} path="/movies/add"/>
        <Route element={<DisplayAll/>} path="/movies"/>
        <Route element={<DisplayOne/>} path="/movies/:id"/>
        <Route element={<UpdateMovie/>} path='/movies/:id/edit'/>
        <Route element={<Action/>} path='/movies/action'/>
        <Route element={<Comedy/>} path='/movies/comedy'/>
        <Route element={<Comedy/>} path='/movies/comedy'/>
        <Route element={<Drama/>} path='/movies/drama'/>
        <Route element={<SciFi/>} path='/movies/sci-fi'/>
        <Route element={<Horror/>} path='/movies/horror'/> */}
        <Route element={<Login/>} path='/login'/>
        <Route element={<API/>} path='/api'/>
        <Route element={<GetOne/>} path='/movie/:movieId'/>
        <Route element={<GetOne/>} path='/movie/:movieId'/>
      </Routes> 
    </>
  )
}

export default App
