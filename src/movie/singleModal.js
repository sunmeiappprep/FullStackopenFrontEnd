import React from "react";
import { useState } from "react";
import Modal from "react-modal/lib/components/Modal";
import MovieImage from "./movieImage";
import GetImagesFromID from "../axiosCalls/getImagesFromID";
const SingleModal = ({singleMovie}) => {

    // why I need this comp?
    // because I am looping thru an array in the carousal, 
    // each item in the array need its own modal state and info
    // then after that it gets put into the carousal with modal in tacl

    const[modalIsOpen,setModalIsOpen] = useState(false)
    let netflixID = singleMovie.netflix_id
    let doesThisHaveBo = singleMovie.bo
    let hasImg = singleMovie.img
    Modal.defaultStyles.overlay.backgroundColor = "rgba(100, 100, 100, 0.75)"
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
                <div >
                <img className="alreadyHaveBo" onClick={()=>setModalIsOpen(true)} src={singleMovie.bo}
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
                <div>
                    <h1>asd1</h1>
                    <h1>asd2</h1>
                    <h3>asd3</h3>
                    <h4>asd4</h4>
                </div>

                <MovieImage 
                    netflix_id={singleMovie.netflix_id} 
                    title={singleMovie.title}
                    synopsis={singleMovie.synopsis}
                    poster={singleMovie.img}
                />
                </Modal>
            </div>
        </React.Fragment>
    )
}

export default SingleModal