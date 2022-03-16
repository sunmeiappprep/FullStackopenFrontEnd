import React, { useState,useEffect } from 'react'
import MovieGenreSelection from '../movie/movieGenreSelection'
import NavbarMain from '../navbar/navbarMain'
import BackgroundFootage from '../images/backgroundFootage'
import MovieMain from '../movie/movieMain'
const Home = () => {
    
    return (
        <React.Fragment>
            <NavbarMain/>
            <BackgroundFootage/>
            <MovieMain/>
        </React.Fragment>
       
    )
}

export default Home

