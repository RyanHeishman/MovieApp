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
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
