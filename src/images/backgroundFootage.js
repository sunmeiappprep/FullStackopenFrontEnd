import React from 'react'
import ReactPlayer from 'react-player'
import { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { TOGGLESOUNDDIV,SETPLAYERHEIGHT } from '../actions/togglesounddiv'
import { useEffect } from 'react'
import VolumeMuteIcon from '@material-ui/icons/VolumeMute';
import VolumeOffSharpIcon from '@material-ui/icons/VolumeOffSharp';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
// import { FileDownload } from "@mui/icons-material";
// node_modules\@material-ui
// import FontAwesomeIcon from '@fortawesome/free-solid-svg-icons' 
const BackgroundFootage = ({links}) => {
    const [randomLink,setRandomLink] = useState()
    
    useEffect(()=>{
        setRandomLink(links[Math.floor(Math.random()*links.length)])
    },[])
    // let randomLink = 

    const handleOnReady = (e) => {
        // console.log(e)
        // e.props.playing = true
    }
    const reduxStateSound = useSelector(state => state.togglesound.bool)
    const testing = useSelector(state => state.playerHeight.height)
    // console.log(testing)
    
    // console.log(reduxStateSound)
    const dispatch = useDispatch()

    const [playing, setPlaying] = useState(true)
    const [muted, setmuted] = useState(reduxStateSound)
    const [heightOfPlayer, setheightOfPlayer] = useState(`${Math.floor(window.innerWidth*.56)}px`)
    
    // console.log(muted);
    const toggleMute = (e) => {
        dispatch(TOGGLESOUNDDIV())
    }

    useEffect(()=>{
        setmuted(reduxStateSound)
    },[reduxStateSound])

    //This is to set the css with absolute value logic for the movies renders 
    useEffect(()=>{
        dispatch(SETPLAYERHEIGHT(`${Math.floor(window.innerWidth*.56)*.80}px`))
    },[])

    // console.log(window.innerWidth)

    const changeHeightOnPlayerBasedOnInnerWidth = (e) => {
        let currentWidth = window.innerWidth
            setheightOfPlayer(`${Math.floor(currentWidth*.56)}px`)
            dispatch(SETPLAYERHEIGHT(`${Math.floor(window.innerWidth*.56)*.80}px`))
            // console.log("running")
      }
    
      useEffect(() => {
        window.addEventListener("resize", changeHeightOnPlayerBasedOnInnerWidth);
        return () => {
          window.removeEventListener("resize", changeHeightOnPlayerBasedOnInnerWidth);
        };
      }, []);

  return (
    // <div ><img id='topPic' src={`https://occ-0-1009-1007.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABRBlV0umeIo-LrjE1tyXQ03SviwnZGvlzDWdzpGn_DL6sB5Zt6AKr7RxSU7tHOg-1w8l72Vwr6BdTE-s5q9GIIAfuCWC.webp?r=2a5`}></img></div>
        <div className='backgroundImageDivContainer'>
            <div className='soundButton' onClick={(e) => toggleMute(e)}>
                {/* <FontAwesomeIcon icon="fa-solid fa-volume-xmark" /> */}
                {
                reduxStateSound 
                    ?<div className='soundIcon'><VolumeOffSharpIcon fontSize='inherit' color='inherit'/></div>
                    :<div className='soundIcon'><VolumeUpIcon fontSize='inherit' color='inherit'/></div>
                }
                
            </div>
            <div className='youtubePlayerDiv' >
            <ReactPlayer 
            id='topPic' 
            url={randomLink}
            // url={'https://www.youtube.com/watch?v=VLSG-mOce0c'}
            width={"100vw"}
            height={heightOfPlayer}
            playing={playing}
            onReady={()=> setPlaying(true)}
            onError={() => setPlaying(true)}
            controls={false}
            loop={true} 
            muted={muted}
            pip={false}
            config={{ youtube: { playerVars: { disablekb: 1 } } }}
            />
        </div>

        </div>


  )
}

export default BackgroundFootage