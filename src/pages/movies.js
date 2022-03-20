import React, { useState,useEffect } from 'react'
import MovieGenreSelection from '../movie/movieGenreSelection'
import NavbarMain from '../navbar/navbarMain'
import BackgroundFootage from '../images/backgroundFootage'
import MovieMain from '../movie/movieMain'
import { useSelector } from 'react-redux'
const Movies = () => {
    const arrayOfImageObject = useSelector(state => state.arrayOfImageObject)
    console.log(arrayOfImageObject)
    return (
        <React.Fragment>
            <NavbarMain/>
            <BackgroundFootage/>
            <MovieGenreSelection typeOfFormat={"Movies"} typeOfMediaForSearch={'movie'}/>
            <MovieMain/>
        </React.Fragment>
       
    )
}

export default Movies

