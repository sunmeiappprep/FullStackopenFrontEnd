import React, { useState,useEffect } from 'react'
import MovieGenreSelection from '../movie/movieGenreSelection'
import NavbarMain from '../navbar/navbarMain'
import BackgroundFootage from '../images/backgroundFootage'
const Mylist = () => {
    
    return (
        <React.Fragment>
            <NavbarMain/>
            <BackgroundFootage/>
            <MovieGenreSelection/>
        </React.Fragment>
       
    )
}

export default Mylist

