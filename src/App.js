import { useState } from 'react'
import Course from './Course'
import PersonMain from './person/personMain'
import CountryMain from './country/countryMain'
import MovieMain from './movie/movieMain'
import NavbarMain from './navbar/navbarMain'
import './css/app.css'; 
import './css/fonts.css'; 
const App = () => {

  return (
    <div>
    <NavbarMain/>
    <div ><img id='topPic' src={`https://i.imgur.com/awZH1Js.jpeg`}></img></div>
    <MovieMain/>
    </div>
  )
}
export default App;
