import React from 'react'
import Modal from 'react-modal/lib/components/Modal'
import MovieSearch from './movieSearch'
import MovieImage from './movieImage'
import { useState } from 'react'
import { useEffect } from 'react'


Modal.setAppElement('#root')
const MovieDisplay = ({movie}) => {
        // movie.primaryImage.url
        // console.log(movie)
        const[modalIsOpen,setModalIsOpen] = useState(false)
        const[width,setWidth] = useState("342px")
        const[height,setHeight] = useState("192px")

        let doesThisHaveBo = movie.bo
        // console.log(movie.rating)
    let hasImg = movie.img
    let hasPoster = movie.poster
    Modal.defaultStyles.overlay.backgroundColor = "rgba(100, 100, 100, 0.75)"
    // console.log(Modal.defaultStyles.overlay.backgroundColor )


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
                <div className="getImagesFromID"style={{"width":width,"height":height}} onClick={()=>setModalIsOpen(true)} >
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
              <MovieImage netflix_id={movie.netflix_id} 
              title={movie.title}
              synopsis={movie.synopsis}
              poster={movie.img}/>
              <h1>asd</h1>
              <h2>asd</h2>
              <h3>asd</h3>
              <h4>asd</h4>
            </Modal>
        </div>
        
        {/* <Modal/> */}
    </div>
  )
}

export default MovieDisplay