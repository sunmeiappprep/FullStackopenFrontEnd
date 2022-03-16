import React, { useState,useEffect } from 'react'
import MovieGenreSelection from '../movie/movieGenreSelection'
import NavbarMain from '../navbar/navbarMain'
import BackgroundFootage from '../images/backgroundFootage'
const Movies = () => {
    
    return (
        <React.Fragment>
            <NavbarMain/>
            <BackgroundFootage/>
            <MovieGenreSelection typeOfFormat={"Movies"}/>
        </React.Fragment>
       
    )
}

export default Movies

