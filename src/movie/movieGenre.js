import { useState,useEffect } from "react";
import axios from "axios";
import MovieDisplay from "./movieDisplay";
import { APIADD } from "../actions/apicallcounter";
import { useDispatch,useSelector } from "react-redux";

const MovieGenre = ({genre}) => {

    const [movieGenreMovies,setMovieGenreMovies] = useState([])
    const dispatch = useDispatch()
    useEffect(() => {
        var options = {
            method: 'GET',
            url: 'https://unogs-unogs-v1.p.rapidapi.com/search/titles',
            params: {genre_list: genre, order_by: 'rating', limit: '5'},
            headers: {
              'x-rapidapi-host': 'unogs-unogs-v1.p.rapidapi.com',
              'x-rapidapi-key': 'b49a84c68fmshcd0c0ae889304fep1f8400jsncfc1f5dbf1ce'
            }
          };
          dispatch(APIADD())

          axios.request(options).then(function (response) {
              console.log(response.data.results);
            setMovieGenreMovies(response.data.results)
          }).catch(function (error) {
              console.error(error);
          });
      }, []); // Only re-run the effect if count changes

      return(
          <div>
              {
                  movieGenreMovies
                  ? <div className='movieDisplay'>
                  {movieGenreMovies.map(movie =>
                      <div key={movie.title+movie.netflix_id} >
                          <MovieDisplay movie={movie} />
                      </div>
                      )
                  }
              </div> 
              :<h1>There are no search result for this genre</h1>
              }
          </div>
      )


}
export default MovieGenre