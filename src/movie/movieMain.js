import { useState,useEffect } from "react";
import axios from "axios";
import MovieDisplay from "./movieDisplay";
import MovieSearch from "./movieSearch";
const MovieMain = () => {
    const [movies,setMovies] = useState([])
    const [movieSearch,setmovieSearch] = useState("")

    const handleOnSubmit = () => {
    
    var options = {
        method: 'GET',
        url: 'https://unogs-unogs-v1.p.rapidapi.com/search/titles',
        params: {title: movieSearch, order_by: 'rating', limit: '25'},
        headers: {

        }
      };
      
      axios.request(options).then(function (response) {
              console.log(response.data.results);
              setMovies(response.data.results)
      }).catch(function (error) {
          console.error(error);
      });
    }

    console.log(movieSearch)
    // let extraImg = (movies.map(movie => movie.netflix_id))

    
    return (
        <div>
            <MovieSearch movieSearch={movieSearch} setmovieSearch={setmovieSearch}/>
            <button onClick={handleOnSubmit}/>
            {
            movies 
            ? movies.map(movie =>
                    <div key={movie.imdb_id}>
                        {console.log(movie.id)}
                        <MovieDisplay movie={movie} />
                    </div>
                )
            :<h1>There are no search result for this movie</h1>
            }

        </div>
    )
}

export default MovieMain