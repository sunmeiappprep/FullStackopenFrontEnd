import React from 'react'
import '../css/navbar.css'; 
import NetflixLogo from '../images/netflix';
import MovieMain from '../movie/movieSearch';
import { useSelector,useDispatch} from 'react-redux'
import { NEWSUBMIT } from '../actions/search.js';
import { useState } from 'react';

const NavbarMain = ({classStyle}) => {
  const [searchTerm,setSearchTerm] = useState("")
  const dispatch = useDispatch()
  // const apiCalled = useSelector()
  // dispatch(NEWSUBMIT())
  // useDispatch()(NEWSUBMIT())
  const handleSubmitTerm = (e) => {
    e.preventDefault()
    dispatch(NEWSUBMIT(searchTerm))
  }

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
            <form onSubmit={handleSubmitTerm}>
              <input
              onChange={(e) => setSearchTerm(e.target.value)}
              value={searchTerm}
              />
            </form>
            <div>DVD</div>
            <div>Reminder</div>
            <div>Profile</div>
        </div>
    </div>
  )
}

export default NavbarMain