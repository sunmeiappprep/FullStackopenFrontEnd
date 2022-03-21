import React, { useState,useEffect } from 'react'
import MovieGenreSelection from '../movie/movieGenreSelection'
import NavbarMain from '../navbar/navbarMain'
import BackgroundFootage from '../images/backgroundFootage'
import youtube from '../youtube/youtube'
import ReactPlayer from 'react-player'
import YoutubePlayer from '../youtube/youtubePlayer'
// import { useState } from 'react'
const Mylist = ({title}) => {

    // const [videoLink,setVideoLink] = useState()
    // const [testing,settesting] = useState("stranger things")


    //  const onAppCompSubmit = async (term) => {

    //     // console.log(title+" "+"trailer")
    //     const response = await youtube.get('/search',{
    //         params: { part: "snippet", maxResults: 1, key: 'AIzaSyDplzBTA6D4MVDHbdJ9kYtHeblb0KPdAvw', q: term }
    //     })
    //     setVideoLink("https://www.youtube.com/watch?v="+response.data.items[0].id.videoId)
    // }
    

    return (
        <YoutubePlayer title={"The dark knight rises"}/>
        // <React.Fragment>
        //     <NavbarMain/>
        //     <div onClick={() => onAppCompSubmit(`${testing} trailer`)} style={{"width":"500px","background-color":"green","height":"500px"}}>asdasdasd</div>
        //     <ReactPlayer 
        //     id='topPic' 
        //     url={videoLink}
        //     // url={'https://www.youtube.com/watch?v=VLSG-mOce0c'}
        //     width={"100vw"}
        //     // height={heightOfPlayer}
        //     playing={true}
        //     controls={false}
        //     loop={true} 
        //     muted={true}
        //     pip={false}
        //     config={{ youtube: { playerVars: { disablekb: 1 } } }}
        //     />
        // </React.Fragment>
    )
       
}

export default Mylist

