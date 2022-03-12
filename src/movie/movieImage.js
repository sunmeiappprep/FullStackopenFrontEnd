import React, { useState } from "react";
import axios from "axios";
const MovieImage = ({netflix_id,title,synopsis,poster}) => {

    const [images,setImages] = useState([])

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

    return(
        <div>
            <img src={poster}/>
            {title}
            {synopsis}
            {/* {
                images && images.map(image =>
                    <div>
                        <img src={image}/>
                    </div>
                    )
            } */}
        </div>
    )
}
export default MovieImage