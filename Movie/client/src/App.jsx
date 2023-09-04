import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MovieForm from './components/MovieForm'
import DisplayAll from './components/DisplayAll'
import UpdateMovie from './components/UpdateMovie'
import DisplayOne from './components/DisplayOne'

function App() {

  return (
    <>
    <BrowserRouter>
      <h1>Let's Watch</h1>
      <hr />
      <Routes>
        <Route element={<MovieForm/>} path="/movies/add"/>
        <Route element={<DisplayAll/>} path="/movies"/>
        <Route element={<DisplayOne/>} path="/movies/:id"/>
        <Route element={<UpdateMovie/>} path='/movies/:id/edit'/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
