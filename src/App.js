import { useState,useEffect } from 'react'
import Course from './Course'
import PersonMain from './person/personMain'
import CountryMain from './country/countryMain'
import MovieMain from './movie/movieMain'
import NavbarMain from './navbar/navbarMain'
import './css/app.css'; 
import './css/fonts.css'; 
import { useSelector,useDispatch } from "react-redux";
import MovieGenreSelection from './movie/movieGenreSelection'
import { useRef } from 'react';
import Tvshow from './tvshow/tvshows'
const App = () => {
  

  const [y, setY] = useState(window.scrollY);
  const [nav, setNav] = useState(<div><NavbarMain classStyle={'unscrolledNavBar'}/></div>);
  // const dispatch = useDispatch()
  // const [genreMenuIsOpen,setGenreMenuIsOpen] = useState(false)
  // const genreDiv = useRef(null);

  // const useOutsideAlerter = (ref) => {
  //   useEffect(() => {
  //       /**
  //        * Alert if clicked on outside of element
  //        */
  //       const handleClickOutside = (event) => {
  //       if (ref.current && !ref.current.contains(event.target)) {
  //           setGenreMenuIsOpen(false)
  //       }
  //       }
  //       // Bind the event listener
  //       document.addEventListener("mousedown", handleClickOutside);
  //       return () => {
  //       // Unbind the event listener on clean up
  //       document.removeEventListener("mousedown", handleClickOutside);
  //       };
  //   }, []);
  //   }

  //   useOutsideAlerter(genreDiv)
  const renderDifferentNavbarBasedOnScrollY = (e) => {
    //Since there is only two options 
    //I will compare the current classStyle 
    //If it doesnt not match then rerender
    //If it does dont

    let current = nav.props.children.props.classStyle
    let scrolled = "navBarScrolled"
    let unscrolled = "unscrolledNavBar"
    if ((e.currentTarget.scrollY !== 0) && current !== scrolled){
      setNav(<div><NavbarMain classStyle={'navBarScrolled'}/></div>)
      console.log("rerenderScroll")
    }else if ((e.currentTarget.scrollY === 0 && current !== unscrolled)){
      setNav(<div><NavbarMain classStyle={'unscrolledNavBar'}/></div>)
      console.log("rerenderUnscroll")

    }
  }

   

  useEffect(() => {
    //the window is the browswer it self and we have access already
    //useEffect Run once and set Y to zero
    //Then add an event listener that takes in a scroll listen and a function
    //So I assume everytime the function runs it will trigger the useEffect
    //if it was set it would rerender every second
    //this time it only rerender if scrolled
    //the second call back removes the listener
    setY(window.scrollY);
    window.addEventListener("scroll", renderDifferentNavbarBasedOnScrollY);
    return () => {
      window.removeEventListener("scroll", renderDifferentNavbarBasedOnScrollY);
    };
  }, [renderDifferentNavbarBasedOnScrollY]);

      

  return (
    <div>
    {nav}
    <MovieGenreSelection/>
    <div ><img id='topPic' src={`https://i.imgur.com/awZH1Js.jpeg`}></img></div>
    {/* <MovieMain/>   */}
    </div>
  )
}
export default App;
