import { useState,useEffect } from 'react'
import { useSelector,useDispatch } from "react-redux";
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'

import './css/app.css'; 
import './css/fonts.css'; 

import MovieMain from './movie/movieMain'
import NavbarMain from './navbar/navbarMain'
import MovieGenreSelection from './movie/movieGenreSelection'

import BackgroundFootage from './images/backgroundFootage'

import Tvshow from './pages/tvshows'
import Home from './pages/home'
import Dvd from './pages/dvd'
import Movies from './pages/movies'
import Mylist from './pages/mylist'
import Popular from './pages/popular'
const App = () => {
  



   


      

  return (
    <div>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tv" element={<Tvshow />} />
      <Route path="/dvd" element={<Dvd />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/mylist" element={<Mylist />} />
      <Route path="/popular" element={<Popular />} />
      {/* <Route path="/dvd" element={<Dvd/>} /> */}
      
    </Routes>
    </div>
  )
}
export default App;
