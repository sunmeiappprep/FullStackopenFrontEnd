import React from 'react'
import '../css/navbar.css'; 
import NetflixLogo from '../images/netflix';
import MovieMain from '../movie/movieSearch';
const NavbarMain = ({classStyle}) => {
  return (
    <div className={classStyle}>
        <div className='navBarleft'>
            <div id='Netflixlogoid'><NetflixLogo/></div>
            <div>Home</div>
            <div>TV Shows</div>
            <div>Movies</div>
            <div>Popular</div>
            <div>My List</div>
        </div>
        <div className='navBarright'>
            <div>DVD</div>
            <div>Reminder</div>
            <div>Profile</div>
        </div>
    </div>
  )
}

export default NavbarMain