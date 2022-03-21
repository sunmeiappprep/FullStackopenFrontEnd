import React, { useState,useEffect } from 'react'
import NavbarMain from '../navbar/navbarMain'
import MovieCarousel from '../movie/movieCarousel';
import BackgroundFootage from '../images/backgroundFootage';
import { useSelector } from 'react-redux';

import items3 from '../JSONdata/testing.json'
import anime from '../JSONdata/tvshows/anime.json'
import action from '../JSONdata/tvshows/action.json'
import teen from '../JSONdata/tvshows/teen.json'
import british from '../JSONdata/tvshows/british.json'
// import classiccult from '../JSONdata/tvshows/classiccult.json'
import comedies from '../JSONdata/tvshows/comedies.json'
import crime from '../JSONdata/tvshows/crime.json'
import documentary from '../JSONdata/tvshows/documentary.json'
import dramas from '../JSONdata/tvshows/dramas.json'
import fantasy from '../JSONdata/tvshows/fantasy.json'
import food from '../JSONdata/tvshows/food.json'
import horror from '../JSONdata/tvshows/horror.json'
import indian from '../JSONdata/tvshows/indian.json'
import japanese from '../JSONdata/tvshows/japanese.json'
import international from '../JSONdata/tvshows/international.json'
import kdrama from '../JSONdata/tvshows/kdrama.json'
import kids from '../JSONdata/tvshows/kids.json'
import lgbt from '../JSONdata/tvshows/lgbt.json'
import romance from '../JSONdata/tvshows/romance.json'
import science from '../JSONdata/tvshows/science.json'
import spanish from '../JSONdata/tvshows/spanish.json'
import standup from '../JSONdata/tvshows/standup.json'
import thriller from '../JSONdata/tvshows/thriller.json'
import compete from '../JSONdata/tvshows/compete.json'







const Dvd = () => {

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


    const[leftMargin,setleftMargin] = useState("")

    let mappingNameToObj = [
        {
            'Anime':anime
        },
        {
            'Action':action
        },
        {
            'British':british
        },
        {
            'Crime':crime
        },
        {
            'Comedies':comedies
        },
        {
            'Teen':teen
        },
        {
            'Documentary':documentary
        },
        {
            'Dramas':dramas
        },
        {
            'Fantasy':fantasy
        },
        {
            'Food':food
        },
        {
            'Horror':horror
        },
        {
            'Indian':indian
        },
        {
            'Japanese':japanese
        },
        {
            'International':international
        },
        {
            'K-drama':kdrama
        },
        {
            'Kids':kids
        },
        {
            'LGBTQ':lgbt
        },
        {
            'Romance':romance
        },
        {
            'Science':science
        },
        {
            'Spanish':spanish
        },
        {
            'Standup':standup
        },
        {
            'Thriller':thriller
        },
        {
            "Compete":compete
        }

    ]

    useEffect(()=>{
        // let arr = [anime,action,teen,british,comedies,crime,documentary,dramas,fantasy]
        // const random = Math.floor(Math.random() * arr.length);
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
        // console.log(mappingNameToObj.length)
        let testing = (mappingNameToObj[mainRandomInt]);
        let testing2 = (mappingNameToObj[(mainRandomInt+10)%mappingNameToObj.length]);
        let testing3 = (mappingNameToObj[(mainRandomInt+4)%mappingNameToObj.length]);
        let testing4 = (mappingNameToObj[(mainRandomInt+6)%mappingNameToObj.length]);
        let testing5 = (mappingNameToObj[(mainRandomInt+2)%mappingNameToObj.length]);
        let testing6 = (mappingNameToObj[(mainRandomInt+8)%mappingNameToObj.length]);
        let testing7 = (mappingNameToObj[(mainRandomInt+12)%mappingNameToObj.length]);
        let testing8 = (mappingNameToObj[(mainRandomInt+14)%mappingNameToObj.length]);


        // console.log(testing2,testing3,testing4)
        // let asd = 
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

    

    useEffect(()=>{
        // console.log(absoluteValue)
    },[absoluteValue])

    useEffect(()=>{
        if(document.querySelector('.alreadyHaveBo')){
            var element = document.querySelector('.alreadyHaveBo')
            var positionInfo = element.getBoundingClientRect();
            console.log(positionInfo.width)
            // setleftMargin(`${Math.abs(Math.floor(positionInfo.left)+5)}px`)
            

        }
    },[firstState])


    useEffect(()=>{
        if(document.querySelector('.izuVIe')){
            var element = document.querySelector('.izuVIe')
            var positionInfo = element.getBoundingClientRect();
            console.log(positionInfo.x)
        }
    },[secondState])

    console.log(fifthState)
    return (
        <React.Fragment>
            <NavbarMain/>
            <BackgroundFootage/>
            <div className='movieAbsDiv' style={{"top":absoluteValue}}>
                {
                    <div className="movieCarouselContainer">
                        <div className='genreText' style={{"margin-left":"40px"}}>{firstStateN}</div>
                        <MovieCarousel array={firstState}/>
                        <div className='genreText' style={{"margin-left":"40px"}}>{secondStateN}</div>
                        <MovieCarousel array={secondState}/>
                        <div className='genreText' style={{"margin-left":"40px"}}>{thirdStateN}</div>
                        <MovieCarousel array={thirdState}/>
                        <div className='genreText' style={{"margin-left":"40px"}}>{fourthStateN}</div>
                        <MovieCarousel array={fourthState}/>
                        <div className='genreText' style={{"margin-left":"40px"}}>{fifthStateN}</div>
                        <MovieCarousel array={fifthState}/>
                        <div className='genreText' style={{"margin-left":"40px"}}>{sixStateN}</div>
                        <MovieCarousel array={sixState}/>
                        <div className='genreText' style={{"margin-left":"40px"}}>{sevenStateN}</div>
                        <MovieCarousel array={sevenState}/>
                        <div className='genreText' style={{"margin-left":"40px"}}>{eightStateN}</div>
                        <MovieCarousel array={eightState}/>
                    </div>
                }
            </div>





        </React.Fragment>
    )
}

export default Dvd

