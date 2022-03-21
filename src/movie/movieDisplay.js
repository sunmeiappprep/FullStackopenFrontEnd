import React from 'react'
import Modal from 'react-modal/lib/components/Modal'
import MovieSearch from './movieSearch'
import MovieImage from './movieImage'
import { useState } from 'react'
import YoutubePlayer from '../youtube/youtubePlayer'
import { useEffect } from 'react'

Modal.setAppElement('#root')
const MovieDisplay = ({movie,width}) => {

        const[modalIsOpen,setModalIsOpen] = useState(false)
        const[height,setHeight] = useState("")

        let doesThisHaveBo = movie.bo
   
        Modal.defaultStyles.overlay.backgroundColor = "rgba(100, 100, 100, 0.75)"

        //Need this code to remove the ' error display in the synopsis

        const reformatSynopsis = (synopsis) => {
          let moreLeft = synopsis.indexOf(`&#39;`)
          while (moreLeft !== -1) {
            synopsis = synopsis.slice(0, moreLeft) + "'" + synopsis.slice(moreLeft + 5)
            moreLeft = synopsis.indexOf(`&#39;`)
          }
          console.log(synopsis.slice(0, moreLeft) + "'" + synopsis.slice(moreLeft + 5))
          return synopsis
        }


  return (
    <div  className='gridFormat'>
        {/* {hasImg && 
        <img onClick={()=>setModalIsOpen(true)} src={movie.img} width={150}/>} */}
        {/* if this has Bo image then load it from there */}
        {/* if not use movieImage to load a wide frame picture */}
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
          {/* This is the modal and its props and content */}
          {/* Youtube will load a video with first result based on title and auto play muted */}
          {/* if modal is open then load the synoposis */}
            <Modal 
              isOpen={modalIsOpen}
              onRequestClose={() => setModalIsOpen(false)}
              shouldFocusAfterRender={true}
              style = {{overlay: {backgroundColor:"black",}}}
               >
              <YoutubePlayer title={movie.title}/>
              {
                modalIsOpen &&
                <MovieImage netflix_id={movie.netflix_id}
                title={movie.title}
                synopsis={movie.synopsis}
                poster={movie.img} />
              }
              {
                modalIsOpen && <div className="synopsisDiv">{reformatSynopsis(movie.synopsis)}</div>
              }
            </Modal>
        </div>
    </div>
  )
}

export default MovieDisplay