import React from 'react'
import '../css/navbar.css'; 
import NetflixLogo from '../images/netflix';
import MovieMain from '../movie/movieSearch';
import { useSelector,useDispatch} from 'react-redux'
import { NEWSUBMIT } from '../actions/search.js';
import { useState } from 'react';
import { CSSTransitionGroup } from 'react-transition-group'
import { useRef } from 'react';
import { useEffect } from 'react';
import searchIcon from '../icons/searchicon.png';
const NavbarMain = ({classStyle}) => {
  const [searchTerm,setSearchTerm] = useState("")
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter)
  const [searchIsOpen,setSearchIsOpen] = useState(false)
  const searchInput = useRef(null);
  const searchFormContainer = useRef(null);
  // const apiCalled = useSelector()
  // dispatch(NEWSUBMIT())
  // useDispatch()(NEWSUBMIT())
  useEffect(()=>{
    // current property is refered to input element
    if(searchIsOpen){
    searchInput.current.focus();
    }
 },[searchIsOpen])

  const handleSubmitTerm = (e) => {
    e.preventDefault()
    dispatch(NEWSUBMIT(searchTerm))
  }

  const handleOnClick = () => {
    console.log(window)
    setSearchIsOpen(searchIsOpen => !searchIsOpen)
    // console.log(searchIsOpen)

  }

  //this function use a use effect function and if mousedown is not the form div it will
  //exit out of the focus and set setSearchIsOpen to false
  //I assume this will active everytime a click is press dude to the fact
  //that 1 mouse down event listener is always active
  //and line 66 will render on ever rerender and event listener is always on if a render
  //happens
  const useOutsideAlerter = (ref) => {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          setSearchIsOpen(false)
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);
  }
  

  useOutsideAlerter(searchFormContainer)

  //I need the ref to trigger the hover to trigger the transition
  return (
    <div className={classStyle}>
        <div className='navBarleft'>
            <div id='Netflixlogoid'><NetflixLogo/></div>
            <div className='notSelectable'>Home</div>
            <div className='notSelectable'>TV Shows</div>
            <div className='notSelectable'>Movies</div>
            <div className='notSelectable'>Popular</div>
            <div className='notSelectable'>My List</div>
        </div>
        <div className='navBarright'>
              <div > 

                  <form  ref={searchFormContainer} className='searchBarContainer' onSubmit={handleSubmitTerm}>
                  <img  className='searchIcon' onClick={handleOnClick}  src={searchIcon}></img>

                  <input className='searchBar'
                  onChange={(e) => setSearchTerm(e.target.value)}
                  value={searchTerm}
                  placeholder={"Title,Genre"}
                  ref={searchInput}
                  />

                </form>
              </div>

            <div className='notSelectable'>DVD</div>
            <div className='notSelectable'>Reminder</div>
            <div className='notSelectable'>Profile</div>
        </div>
    </div>
  )
}

export default NavbarMain