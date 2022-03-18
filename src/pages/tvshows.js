import React, { useState,useEffect } from 'react'
import MovieGenreSelection from '../movie/movieGenreSelection'
import NavbarMain from '../navbar/navbarMain'
import BackgroundFootage from '../images/backgroundFootage'
import MovieMain from '../movie/movieMain'
import { useSelector } from 'react-redux';
const Tvshow = () => {
    const arrayOfImageObject = useSelector(state => state.arrayOfImageObject)
    console.log(arrayOfImageObject)
    return (
        <React.Fragment>
            <NavbarMain/>
            <BackgroundFootage/>
            <MovieGenreSelection typeOfFormat={"TV Show"} typeOfMediaForSearch={'series'}/>
            <MovieMain/>
        </React.Fragment>
       
    )
}

export default Tvshow

