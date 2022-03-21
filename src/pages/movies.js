import React, { useState,useEffect } from 'react'
import MovieGenreSelection from '../movie/movieGenreSelection'
import NavbarMain from '../navbar/navbarMain'
import BackgroundFootage from '../images/backgroundFootage'
import MovieMain from '../movie/movieMain'
import { useSelector } from 'react-redux'
import MovieCarousel from '../movie/movieCarousel';

import AfricanF from '../JSONdata/movies/African.json'
import AnimeF from '../JSONdata/movies/Anime.json'
import ArgentinianF from '../JSONdata/movies/Argentinian.json'
import AsianF from '../JSONdata/movies/Asian.json'
import AwardF from '../JSONdata/movies/Award.json'
import BollywoodF from '../JSONdata/movies/Bollywood.json'
import BritishF from '../JSONdata/movies/British.json'
import ClassicF from '../JSONdata/movies/Classic.json'
import CrimeF from '../JSONdata/movies/Crime.json'
import DanishF from '../JSONdata/movies/Danish.json'
// import Horror from '../JSONdata/movies/Horror.json'
import JapaneseF from '../JSONdata/movies/Japanese.json'
import LGBTF from '../JSONdata/movies/LGBT.json'
import PolishF from '../JSONdata/movies/Polish.json'
import RomanticF from '../JSONdata/movies/Romantic.json'
import ScandinavianF from '../JSONdata/movies/Scandinavian.json'
import SpanishF from '../JSONdata/movies/Spanish.json'
import SportF from '../JSONdata/movies/Sports.json'
import SupernaturalF from '../JSONdata/movies/Supernatural.json'
import SwedishF from '../JSONdata/movies/Swedish.json'
import TeenF from '../JSONdata/movies/Teen.json'
import ThaiF from '../JSONdata/movies/Thai.json'
import TurkishF from '../JSONdata/movies/Turkish.json'
import SciFiF from '../JSONdata/movies/Sci-Fi.json'
import DutchF from '../JSONdata/movies/Dutch.json'
import BrazilianF from '../JSONdata/movies/Brazilian.json'



const Movies = () => {

    const[firstState,setfirstState] = useState([])
    const[secondState,setsecondState] = useState([])
    const[thirdState,setthirdState] = useState([])
    const[fourthState,setfourthState] = useState([])
    const[firstStateN,setfirstStateN] = useState("")
    const[secondStateN,setsecondStateN] = useState("")
    const[thirdStateN,setthirdStateN] = useState("")
    const[fourthStateN,setfourthStateN] = useState("")
    const[fifthState,setfifthState] = useState([])
    const[fifthStateN,setfifthStateN] = useState("")
    const[sixState,setsixState] = useState([])
    const[sixStateN,setsixStateN] = useState("")
    const[sevenState,setsevenState] = useState([])
    const[sevenStateN,setsevenStateN] = useState("")
    const[eightState,seteightState] = useState([])
    const[eightStateN,seteightStateN] = useState("")
    
    const[width,setWidth] = useState("")
    
    const search = useSelector(state => state.search)
    let mappingNameToObj = [
        {
            'African Films':AfricanF
        },
        {
            'Anime Films':AnimeF
        },
        {
            'Argentinian Films':ArgentinianF
        },
        {
            'Asian Films':AsianF
        },
        {
            'Award Films':AwardF
        },
        {
            'British Films':BritishF
        },
        {
            'Classic Films':ClassicF
        },
        {
            'Danish Films':DanishF
        },
        {
            'LGBT Films':LGBTF
        },
        {
            'Polish Films':PolishF
        },
        {
            'Scandinavian Films':ScandinavianF
        },
        {
            'Sport Films':SportF
        },
        {
            'Supernatural Films':SupernaturalF
        },
        {
            'Swedish Films':SwedishF
        },
        {
            'Teen Films':TeenF
        },
        {
            'Thai Films':ThaiF
        },
        {
            'Turkish Films':TurkishF
        },
        {
            'Bollywood Films':BollywoodF
        },
        {
            'Crime Films':CrimeF
        },
        {
            'Japanese Films':JapaneseF
        },
        {
            'Romantic Films':RomanticF
        },
        {
            'Spanish Films':SpanishF
        },
        {
            "Sci-Fi Films":SciFiF
        },
        {
            "Dutch Films":DutchF
        },
        {
            "Brazilian Films":BrazilianF
        }

    ]



    const movieLinks = [
        "https://www.youtube.com/watch?v=1JLUn2DFW4w",
        "https://www.youtube.com/watch?v=o2AsIXSh2xo",
        "https://www.youtube.com/watch?v=SL9aJcqrtnw",
        
    ]

    

    useEffect(()=>{
        const shuffleArray = (array) =>{
            for (var i = array.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
            return array
        }


        let mainRandomInt = Math.floor(Math.random() * mappingNameToObj.length)
        let testing = (mappingNameToObj[mainRandomInt]);
        let testing2 = (mappingNameToObj[(mainRandomInt+10)%mappingNameToObj.length]);
        let testing3 = (mappingNameToObj[(mainRandomInt+4)%mappingNameToObj.length]);
        let testing4 = (mappingNameToObj[(mainRandomInt+6)%mappingNameToObj.length]);
        let testing5 = (mappingNameToObj[(mainRandomInt+2)%mappingNameToObj.length]);
        let testing6 = (mappingNameToObj[(mainRandomInt+8)%mappingNameToObj.length]);
        let testing7 = (mappingNameToObj[(mainRandomInt+12)%mappingNameToObj.length]);
        let testing8 = (mappingNameToObj[(mainRandomInt+14)%mappingNameToObj.length]);


 
        setfirstState(shuffleArray(Object.values(testing)[0]))

        setfirstStateN(Object.keys(testing).toString())
        setsecondState(shuffleArray(Object.values(testing2)[0]))
        setsecondStateN(Object.keys(testing2).toString())
        setthirdState(shuffleArray(Object.values(testing3)[0]))
        setthirdStateN(Object.keys(testing3).toString())
        setfourthState(shuffleArray(Object.values(testing4)[0]))
        setfourthStateN(Object.keys(testing4).toString())
        setfifthState(shuffleArray(Object.values(testing5)[0]))
        setfifthStateN(Object.keys(testing5).toString())
        setsixState(shuffleArray(Object.values(testing6)[0]))
        setsixStateN(Object.keys(testing6).toString())
        setsevenState(shuffleArray(Object.values(testing7)[0]))
        setsevenStateN(Object.keys(testing7).toString())
        seteightState(shuffleArray(Object.values(testing8)[0]))
        seteightStateN(Object.keys(testing8).toString())
        // console.log(testing5,testing6,testing7,testing8)
    },[])

    const absoluteValue = useSelector(state => state.playerHeight.height)


    const changeImgBasic = (e) => {
        let currentWidth = window.innerWidth
        // console.log(currentWidth)
        if (currentWidth > 1600){
          setWidth("16vw")
        }
        else if (currentWidth > 1300){
          setWidth("19vw")
        }
        else if (currentWidth > 1000){
          setWidth("24vw")
        }
        else if (currentWidth > 800){
          setWidth("30vw")
        }
        else{
          setWidth("45vw")
        }
      }
    
      useEffect(() => {
        window.addEventListener("resize", changeImgBasic);
        return () => {
          window.removeEventListener("resize", changeImgBasic);
        };
      }, []);
    // console.log(window.innerWidth)
  
    useEffect(() =>{
      changeImgBasic()
    },[])

    return (
        <React.Fragment>
            <NavbarMain/>
            {
                (!search) ?
                <div>
                    <BackgroundFootage links={movieLinks}/>
                    <MovieGenreSelection typeOfFormat={"Movies"} typeOfMediaForSearch={'movie'}/>
                    <div className='movieAbsDiv' style={{"top":absoluteValue}}>
                        {
                            <div className="movieCarouselContainer">
                                <div className='genreText' style={{"margin-left":"40px"}}>{firstStateN}</div>
                                <MovieCarousel array={firstState} width={width}/>
                                <div className='genreText' style={{"margin-left":"40px"}}>{secondStateN}</div>
                                <MovieCarousel array={secondState} width={width}/>
                                <div className='genreText' style={{"margin-left":"40px"}}>{thirdStateN}</div>
                                <MovieCarousel array={thirdState} width={width}/>
                                <div className='genreText' style={{"margin-left":"40px"}}>{fourthStateN}</div>
                                <MovieCarousel array={fourthState} width={width}/>
                                <div className='genreText' style={{"margin-left":"40px"}}>{fifthStateN}</div>
                                <MovieCarousel array={fifthState} width={width}/>
                                <div className='genreText' style={{"margin-left":"40px"}}>{sixStateN}</div>
                                <MovieCarousel array={sixState} width={width}/>
                                <div className='genreText' style={{"margin-left":"40px"}}>{sevenStateN}</div>
                                <MovieCarousel array={sevenState} width={width}/>
                                <div className='genreText' style={{"margin-left":"40px"}}>{eightStateN}</div>
                                <MovieCarousel array={eightState} width={width}/>
                            </div>
                        }
                    </div>                   
                </div>
                :
                <MovieMain width={width}/>
            }

        </React.Fragment>
       
    )
}

export default Movies

