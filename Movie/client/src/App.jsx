import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MovieForm from './components/MovieForm'
import DisplayAll from './components/DisplayAll'
import UpdateMovie from './components/UpdateMovie'
import DisplayOne from './components/DisplayOne'
import Nav from './components/Nav'
import StartPage from './components/StartPage'
import Action from './components/Action'
import Comedy from './components/Comedy'
import Drama from './components/Drama'
import SciFi from './components/SciFi'
import Horror from './components/Horror'

function App() {

  return (
    <>
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route element={<StartPage/>} path='/'/>
        <Route element={<MovieForm/>} path="/movies/add"/>
        <Route element={<DisplayAll/>} path="/movies"/>
        <Route element={<DisplayOne/>} path="/movies/:id"/>
        <Route element={<UpdateMovie/>} path='/movies/:id/edit'/>
        <Route element={<Action/>} path='/movies/action'/>
        <Route element={<Comedy/>} path='/movies/comedy'/>
        <Route element={<Comedy/>} path='/movies/comedy'/>
        <Route element={<Drama/>} path='/movies/drama'/>
        <Route element={<SciFi/>} path='/movies/sci-fi'/>
        <Route element={<Horror/>} path='/movies/horror'/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
