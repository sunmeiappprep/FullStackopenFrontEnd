import React from 'react'
import Modal from 'react-modal/lib/components/Modal'
import MovieSearch from './movieSearch'
import MovieImage from './movieImage'
import { useState } from 'react'
import YoutubePlayer from '../youtube/youtubePlayer'
import { useEffect } from 'react'

Modal.setAppElement('#root')
const MovieDisplay = ({movie,width}) => {
        // movie.primaryImage.url
        // console.log(movie)
        const[modalIsOpen,setModalIsOpen] = useState(false)
        // const[width,setWidth] = useState("")
        const[height,setHeight] = useState("")

        let doesThisHaveBo = movie.bo
        // console.log(movie.rating)
    let hasImg = movie.img
    let hasPoster = movie.poster
    Modal.defaultStyles.overlay.backgroundColor = "rgba(100, 100, 100, 0.75)"
    // console.log(Modal.defaultStyles.overlay.backgroundColor )


  // const changeImgBasic = (e) => {
  //     let currentWidth = window.innerWidth
  //     console.log(currentWidth)
  //     if (currentWidth > 1600){
  //       setWidth("16vw")
  //     }
  //     else if (currentWidth > 1300){
  //       setWidth("19vw")
  //     }
  //     else if (currentWidth > 1000){
  //       setWidth("24vw")
  //     }
  //     else if (currentWidth > 800){
  //       setWidth("30vw")
  //     }
  //     else{
  //       setWidth("45vw")
  //     }
  //         // if(currentWidth > 1600)
  //         // setheightOfPlayer(`${Math.floor(currentWidth*.56)}px`)
  //         // dispatch(SETPLAYERHEIGHT(`${Math.floor(window.innerWidth*.56)*.80}px`))
  //         // console.log("running")
  //   }
  
  //   useEffect(() => {
  //     window.addEventListener("resize", changeImgBasic);
  //     return () => {
  //       window.removeEventListener("resize", changeImgBasic);
  //     };
  //   }, []);
  // // console.log(window.innerWidth)

  // useEffect(() =>{
  //   changeImgBasic()
  // },[])


  return (
    <div  className='gridFormat'>
        {/* {hasImg && 
        <img onClick={()=>setModalIsOpen(true)} src={movie.img} width={150}/>} */}
            {
                doesThisHaveBo
                ?
                <div  className="alreadyHaveBoCon" >
               <img className="alreadyHaveBo" style={{"width":width,"height":height}} onClick={()=>setModalIsOpen(true)} src={movie.bo}

                />
                </div>
                : 
                <div className="getImagesFromID"style={{"max-width":width,"height":height}} onClick={()=>setModalIsOpen(true)} >
                    <MovieImage netflix_id={movie.netflix_id} />
                    {/* <img onClick={()=>setModalIsOpen(true)} src={movie.img} width={150}/> */}
                </div>
            }
        <div >
            <Modal 
              
              isOpen={modalIsOpen}
              onRequestClose={() => setModalIsOpen(false)}
              shouldFocusAfterRender={true}
              style = {
              
                {
                  overlay: {
                    backgroundColor:"black",
                    // width:"100vw",
                    // height:"50vh",
                    // top: "25%",

                  },
                  // content: {
                  //   boxSizing:"borderBox",
                  //   width:"50vw",
                  //   // color:'green',
                  //   left: "25%",
                  //   // top: "25%",
                  //   // backgroundColor:'black',
                  //   border:"none",
                  //   overflow: "hidden",
                  //   overflowY: "scroll",
                  // }
                }
              }
            >
              <YoutubePlayer title={movie.title}/>
              <MovieImage netflix_id={movie.netflix_id} 
              title={movie.title}
              synopsis={movie.synopsis}
              poster={movie.img}/>
              <div className='synopsisDiv'>{`${movie.synopsis}`}</div>
            </Modal>
        </div>
        
        {/* <Modal/> */}
    </div>
  )
}

export default MovieDisplay