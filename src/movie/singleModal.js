import React from "react";
import { useState } from "react";
import Modal from "react-modal/lib/components/Modal";
import MovieImage from "./movieImage";
import GetImagesFromID from "../axiosCalls/getImagesFromID";
import { useEffect } from "react";
import YoutubePlayer from "../youtube/youtubePlayer";
const SingleModal = ({singleMovie,propWidth}) => {

    // why I need this comp?
    // because I am looping thru an array in the carousal, 
    // each item in the array need its own modal state and info
    // then after that it gets put into the carousal with modal in tacl
    
    const[modalIsOpen,setModalIsOpen] = useState(false)
    const[width,setWidth] = useState("")


    let netflixID = singleMovie.netflix_id
    let doesThisHaveBo = singleMovie.bo

    Modal.defaultStyles.overlay.backgroundColor = "rgba(100, 100, 100, 0.75)"


      const changeImgBasic = (e) => {
        let currentWidth = window.innerWidth
        if (currentWidth > 1363){
          setWidth("15vw")
        }
        else if (currentWidth > 1111){
          setWidth("18vw")
        }
        else if (currentWidth > 800){
          setWidth("22vw")
        }
        else if (currentWidth > 500){
          setWidth("30vw")
        }
        else{
          setWidth("45vw")
        }

      }

      useEffect(() =>{
        changeImgBasic()
      },[propWidth])

      const reformatSynopsis = (synopsis) =>{
        let moreLeft = synopsis.indexOf(`&#39;`)
            while (moreLeft !== -1){
                synopsis = synopsis.slice(0,moreLeft)+"'"+synopsis.slice(moreLeft+5)
                moreLeft = synopsis.indexOf(`&#39;`)
            }
        console.log(synopsis.slice(0,moreLeft)+"'"+synopsis.slice(moreLeft+5))
        return synopsis
      }

    return(
        <React.Fragment>
            {
                doesThisHaveBo
                ?
                <div  className="alreadyHaveBoCon"  style={{"width":width}} >
                <img className="alreadyHaveBo" style={{"width":width}} onClick={()=>setModalIsOpen(true)} src={singleMovie.bo}
                />
                </div>
                : 
                // In theory this will not be use cause the array is from JSON file
                <div className="getImagesFromID" onClick={()=>setModalIsOpen(true)} >
                    <GetImagesFromID netflix_id={netflixID} />
                </div>
            }


            <div>
                <Modal 
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                shouldFocusAfterRender={true}
                style = {{overlay: {backgroundColor:"black",}}}
                >
                {/* this is modal content zone */}
                <YoutubePlayer title={singleMovie.title}/>
                {
                    modalIsOpen && 
                        <MovieImage
                            netflix_id={singleMovie.netflix_id}
                            title={singleMovie.title}
                            synopsis={singleMovie.synopsis}
                            poster={singleMovie.img}
                        />
                }
       
                {
                    modalIsOpen && <div className="synopsisDiv">{reformatSynopsis(singleMovie.synopsis)}</div>
                }

                </Modal>
                
            </div>
        </React.Fragment>
    )
}

export default SingleModal