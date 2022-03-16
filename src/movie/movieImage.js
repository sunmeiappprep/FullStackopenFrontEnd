import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch,useSelector } from "react-redux";
import { APIADD } from "../actions/apicallcounter";
const MovieImage = ({netflix_id,title,synopsis,poster}) => {

    const [images,setImages] = useState([])
    const [dimension,setDimension] = useState([])
    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch()
    useEffect(() => {
        var options = {
            method: 'GET',
            url: 'https://unogs-unogs-v1.p.rapidapi.com/title/images',
            params: {netflix_id: netflix_id},
            headers: {
              'x-rapidapi-host': 'unogs-unogs-v1.p.rapidapi.com',
              'x-rapidapi-key': 'b49a84c68fmshcd0c0ae889304fep1f8400jsncfc1f5dbf1ce'
            }
          };
          dispatch(APIADD())

          axios.request(options).then(function (response) {
            //   console.log(response.data.results);
              setImages(response.data.results)
          }).catch(function (error) {
              console.error(error);
          });
      }, []); // Only re-run the effect if count changes


    //this onload seems to be an event listener and is async
    const getMeta = (url) => {   
        var img = new Image();
        img.onload = function() {
            // console.log( this.width +" "+ this.height );
            if(this.width> 1000){
                // console.log(this.width,"has pass")
                setDimension(prevArray => [...prevArray, url])
                // console.log(url)

            }
        };
        img.src = url;
    }

    //So everytime images changes this will update setDimension
    useEffect(() => {
        if(!images) {
            return null
        }
        images.forEach(image => getMeta(image.url))
    },[images]) 
    return(
        <div>
            {counter}
            {/* <img src={poster}/>
            {title}
            {synopsis} */}
            <div className="arrayOfImagesContainer">
                {
                    dimension.length !== 0 ?
                    dimension.map(image =>
                        <div key={image} className="arrayOfImages">
                        {
                            <img src={image}></img>
                        }
                        </div>
                        )
                    :
                    <img src={'https://i.imgur.com/st2SrKk.jpeg'}></img>
                    
                }
            </div>

        </div>
    )
}
export default MovieImage