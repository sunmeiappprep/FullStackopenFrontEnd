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
  const [y, setY] = useState(window.scrollY);
  const [nav, setNav] = useState('navBarScrolled');
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
    // console.log(window)
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



  
  //Combine with the useEffect this event listener will set the classname for the nav
  //if the Y axis is not 0 then it will gray out
  //the y Axis is only limited to the navbar

  // const renderDifferentNavbarBasedOnScrollY = (e) => {
  //   //Since there is only two options 
  //   //I will compare the current classStyle 
  //   //If it doesnt not match then rerender
  //   //If it does dont

  //   let current = nav
  //   let scrolled = "navBarScrolled"
  //   let unscrolled = "unscrolledNavBar"
  //   // console.log(nav)
  //   if ((e.currentTarget.scrollY !== 0) && current !== scrolled){
  //     setNav('navBarScrolled')
  //     // console.log("rerenderScroll")
  //   }else if ((e.currentTarget.scrollY === 0 && current !== unscrolled)){
  //     setNav('unscrolledNavBar')
  //     // console.log("rerenderUnscroll")

  //   }
  // }

  // useEffect(() => {
  //   //the window is the browswer it self and we have access already
  //   //useEffect Run once and set Y to zero
  //   //Then add an event listener that takes in a scroll listen and a function
  //   //So I assume everytime the function runs it will trigger the useEffect
  //   //if it was set it would rerender every second
  //   //this time it only rerender if scrolled
  //   //the second call back removes the listener
  //   // setY(window.scrollY);
  //   // console.log(window.scrollY)
  //   window.addEventListener("scroll", renderDifferentNavbarBasedOnScrollY);
  //   return () => {
  //     window.removeEventListener("scroll", renderDifferentNavbarBasedOnScrollY);
  //   };
  // }, [renderDifferentNavbarBasedOnScrollY]);

  const checkIfUrlIsSelf = (slashRoute) => {
      if (slashRoute[0] !== "h"){
      window.location.href = slashRoute;
      }
      else {
        window.open(slashRoute);
      }
  }

  //I need the ref to trigger the hover to trigger the transition
  return (
    <div className={nav}>
        <div className='navBarleft'>
            <div id='Netflixlogoid'><NetflixLogo/></div>
            <div className='notSelectable' onClick={() => checkIfUrlIsSelf(`/`)}>Home</div>
            <div className='notSelectable' onClick={() => checkIfUrlIsSelf(`/tv`)}>TV Shows</div>
            <div className='notSelectable' onClick={() => checkIfUrlIsSelf(`/movies`)}>Movies</div>
            <div className='notSelectable' onClick={() => checkIfUrlIsSelf(`https://waterbnb.herokuapp.com/#/`)}>WaterBnb</div>
            <div className='notSelectable' onClick={() => checkIfUrlIsSelf(`https://slippers.herokuapp.com/`)}>Slipper</div>
            

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

            <div className='notSelectable' onClick={() => checkIfUrlIsSelf(`https://sunmeiappprep.github.io/MouseDDR/`)}>MouseDDR</div>
            <div className='notSelectable' onClick={() => checkIfUrlIsSelf(`https://www.linkedin.com/in/sunny-mei-534677153/`)}>Linkedin</div>
            <div className='notSelectable' onClick={() => checkIfUrlIsSelf(`https://sunmeiappprep.github.io/Profolio/`)}>Profolio</div>
        </div>
    </div>
  )
}

export default NavbarMain