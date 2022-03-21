import React, { useEffect,useState } from 'react'
import youtube from '../youtube/youtube'
import ReactPlayer from 'react-player'
const YoutubePlayer = ({title}) => {

    const [videoLink,setVideoLink] = useState()
    const [testing,settesting] = useState("stranger things")


    const onAppCompSubmit = async (term) => {

        let searchTrailer = (term+" "+"trailer")
        const response = await youtube.get('/search',{
            params: { part: "snippet", maxResults: 1, key: 'AIzaSyDplzBTA6D4MVDHbdJ9kYtHeblb0KPdAvw', q: searchTrailer }
        })
        setVideoLink("https://www.youtube.com/watch?v="+response.data.items[0].id.videoId)
    }

    useEffect(()=>{
        onAppCompSubmit(title)
    },[])
    return (
        <React.Fragment>        
            <ReactPlayer 
                id='topPic2' 
                url={videoLink}
                // url={'https://www.youtube.com/watch?v=VLSG-mOce0c'}
                width={"50vw"}
                // height={"50vh"}
                playing={true}
                controls={true}
                loop={true} 
                muted={true}
                pip={false}
                config={{ youtube: { playerVars: { disablekb: 1 } } }}
            />
            </React.Fragment>
    )
}

export default YoutubePlayer

