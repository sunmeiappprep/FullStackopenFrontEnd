import React, { useState,useEffect } from 'react'
import MovieGenreSelection from '../movie/movieGenreSelection'
import NavbarMain from '../navbar/navbarMain'
const Tvshow = () => {
    
    return (
        <React.Fragment>
            <NavbarMain/>
            <div ><img id='topPic' src={`https://i.imgur.com/awZH1Js.jpeg`}></img></div>
            <MovieGenreSelection/>
        </React.Fragment>
       
    )
}

export default Tvshow

