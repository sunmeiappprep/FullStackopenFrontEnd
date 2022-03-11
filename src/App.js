import { useState,useEffect } from 'react'
import Course from './Course'
import PersonMain from './person/personMain'
import CountryMain from './country/countryMain'
import MovieMain from './movie/movieMain'
import NavbarMain from './navbar/navbarMain'
import './css/app.css'; 
import './css/fonts.css'; 
const App = () => {

  const [y, setY] = useState(window.scrollY);
  const [nav, setNav] = useState(<div><NavbarMain classStyle={'unscrolledNavBar'}/></div>);
  const [prevnav, setprevNav] = useState(nav);

  // console.log(nav.props.children.props.classStyle)
// 
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
    setY(window.scrollY);
    window.addEventListener("scroll", renderDifferentNavbarBasedOnScrollY);

    return () => {
      window.removeEventListener("scroll", renderDifferentNavbarBasedOnScrollY);
    };
  }, [renderDifferentNavbarBasedOnScrollY]);

      

  return (
    <div>
    {nav}
    <div ><img id='topPic' src={`https://i.imgur.com/awZH1Js.jpeg`}></img></div>
    <MovieMain/>
    </div>
  )
}
export default App;
