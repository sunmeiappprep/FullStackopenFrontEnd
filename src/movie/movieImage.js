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
    const getMeta = (url,type) => {   
        var img = new Image();
        img.onload = function() {
            // console.log( this.width +" "+ this.height );
            if(this.width> 1000 && type[1] === "o"){
                console.log(type)
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
        
        images.forEach(image => {
            // console.log(image.image_type)
            getMeta(image.url,image.image_type)
        }
        )
    },[images]) 
    return(
        <div>
            {counter}
            {/* <img src={poster}/>
            {title}
            {synopsis} */}
            <div className="arrayOfImagesContainer">
                {
                    dimension.length !== 0 
                    ?
                    <img src={dimension[0]}></img>
                    :
                    <img style={{"width":"100px","margin-left": "auto","margin-right": "auto"}} src={'https://media4.giphy.com/media/3o7bu3XilJ5BOiSGic/giphy.gif?cid=ecf05e47v8kdcu12ej71qnqetp7w9kvxnl2jrm0xin1u6byp&rid=giphy.gif&ct=g'}></img>
                }
            </div>

        </div>
    )
}
export default MovieImage

// return(
//     <div>
//         {counter}
//         {/* <img src={poster}/>
//         {title}
//         {synopsis} */}
//         <div className="arrayOfImagesContainer">
//             {
//                 dimension.length !== 0 ?
//                 dimension.map(image =>
//                     <div key={image} className="arrayOfImages">
//                     {
//                         <img src={image}></img>
//                     }
//                     </div>
//                     )
//                 :
//                 <img src={'https://i.imgur.com/st2SrKk.jpeg'}></img>
                
//             }
//         </div>

//     </div>
// )