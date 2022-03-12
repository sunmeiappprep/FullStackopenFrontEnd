import React, { useEffect, useState } from "react";
import axios from "axios";
const MovieImage = ({netflix_id,title,synopsis,poster}) => {

    const [images,setImages] = useState([])
    const [dimension,setDimension] = useState([])
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
          
          axios.request(options).then(function (response) {
              console.log(response.data.results);
              setImages(response.data.results)
          }).catch(function (error) {
              console.error(error);
          });
        //   wideImagine().then(res => console.log(...res))
      }, []); // Only re-run the effect if count changes

      const getMeta = (url) => {   
        var img = new Image();
        img.onload = function() {
            console.log( this.width +" "+ this.height );
            return [this.width,this.height]
        };
        img.src = url;
    }

    async function wideImagine () {
         const result = await images.map(image =>  getMeta(image.url))
        return result
    } 
    console.log(dimension)
    return(
        <div>
            testing
            {/* <img src={poster}/>
            {title}
            {synopsis} */}
            {
                images && images.map(image =>
                    <div>
                        {(image.image_type)}
                        <img src={image.url}/>
                    </div>
                    )
            }
        </div>
    )
}
export default MovieImage