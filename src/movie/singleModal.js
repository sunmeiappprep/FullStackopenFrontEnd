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
    // const[width,setWidth] = useState(`${Math.floor(window.innerWidth*.155)}px`)
    const[width,setWidth] = useState("")


    let netflixID = singleMovie.netflix_id
    let doesThisHaveBo = singleMovie.bo
    let hasImg = singleMovie.img
    Modal.defaultStyles.overlay.backgroundColor = "rgba(100, 100, 100, 0.75)"

    // const getWidthOfWindowToResize = (e) => {
    //     let currentWidth = window.innerWidth
    //         setWidth(`${Math.floor(currentWidth*.155)}px`)
    //         // console.log("running")
    //   }
    
    //   useEffect(() => {
    //     window.addEventListener("resize", getWidthOfWindowToResize);
    //     return () => {
    //       window.removeEventListener("resize", getWidthOfWindowToResize);
    //     };
    //   }, []);

      const changeImgBasic = (e) => {
        // console.log("is this running?")
        let currentWidth = window.innerWidth
        // console.log(currentWidth)
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

    //   console.log("this is SM",width)
    //   console.log("this is props",propWidth)

    return(
        <React.Fragment>
            {/* {
            hasImg 
            && 
            <img onClick={()=>setModalIsOpen(true)} src={singleMovie.img} width={150}
            />
            } */}
            {
                doesThisHaveBo
                ?
                <div  className="alreadyHaveBoCon"  style={{"width":width}} >
                <img className="alreadyHaveBo" style={{"width":width}} onClick={()=>setModalIsOpen(true)} src={singleMovie.bo}
                />
                </div>
                : 
                <div className="getImagesFromID" onClick={()=>setModalIsOpen(true)} >
                    <GetImagesFromID netflix_id={netflixID} />
                </div>
            }


            <div>
                <Modal 
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                shouldFocusAfterRender={true}
                style = {
                    // there is reactcss in the css files
                    {
                    overlay: {
                        backgroundColor:"black",
                    },
                    // content: {
                    // }
                    }
                }
                >
                {/* this is modal content zone */}
                {/* <div>
                    <h1>asd1</h1>
                    <h1>asd2</h1>
                    <h3>asd3</h3>
                    <h4>asd4</h4>
                </div> */}
                <YoutubePlayer title={singleMovie.title}/>
                <MovieImage 
                    netflix_id={singleMovie.netflix_id} 
                    title={singleMovie.title}
                    synopsis={singleMovie.synopsis}
                    poster={singleMovie.img}
                />
                <div className="synopsisDiv">{`${singleMovie.synopsis}`}</div>

                </Modal>
                
            </div>
        </React.Fragment>
    )
}

export default SingleModal