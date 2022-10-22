import { useState,useEffect } from "react";
import axios from "axios";
import MovieDisplay from "./movieDisplay";
import MovieSearch from "./movieSearch";
import '../css/moviesDisplay.css'; 
import { useSelector,useDispatch } from "react-redux";
import { UPDATEMOVIELIST } from "../actions/movielist";
import { APIADD } from "../actions/apicallcounter";
import MovieGenreSelection from "./movieGenreSelection";
import { useRef } from 'react';
import MovieCarousel from './movieCarousel'
import anime from '../JSONdata/tvshows/anime.json'
import action from '../JSONdata/tvshows/action.json'
import teen from '../JSONdata/tvshows/teen.json'
import british from '../JSONdata/tvshows/british.json'
// import classiccult from '../JSONdata/tvshows/classiccult.json'
import comedies from '../JSONdata/tvshows/comedies.json'
import crime from '../JSONdata/tvshows/crime.json'
import documentary from '../JSONdata/tvshows/documentary.json'
import dramas from '../JSONdata/tvshows/dramas.json'
import fantasy from '../JSONdata/tvshows/fantasy.json'
import food from '../JSONdata/tvshows/food.json'
import horror from '../JSONdata/tvshows/horror.json'
import indian from '../JSONdata/tvshows/indian.json'
import japanese from '../JSONdata/tvshows/japanese.json'
import international from '../JSONdata/tvshows/international.json'
import kdrama from '../JSONdata/tvshows/kdrama.json'
import kids from '../JSONdata/tvshows/kids.json'
import lgbt from '../JSONdata/tvshows/lgbt.json'
import romance from '../JSONdata/tvshows/romance.json'
import science from '../JSONdata/tvshows/science.json'
import spanish from '../JSONdata/tvshows/spanish.json'
import standup from '../JSONdata/tvshows/standup.json'
import thriller from '../JSONdata/tvshows/thriller.json'
import compete from '../JSONdata/tvshows/compete.json'

import AfricanF from '../JSONdata/movies/African.json'
import AnimeF from '../JSONdata/movies/Anime.json'
import ArgentinianF from '../JSONdata/movies/Argentinian.json'
import AsianF from '../JSONdata/movies/Asian.json'
import AwardF from '../JSONdata/movies/Award.json'
import BollywoodF from '../JSONdata/movies/Bollywood.json'
import BritishF from '../JSONdata/movies/British.json'
import ClassicF from '../JSONdata/movies/Classic.json'
import CrimeF from '../JSONdata/movies/Crime.json'
import DanishF from '../JSONdata/movies/Danish.json'
// import Horror from '../JSONdata/movies/Horror.json'
import JapaneseF from '../JSONdata/movies/Japanese.json'
import LGBTF from '../JSONdata/movies/LGBT.json'
import PolishF from '../JSONdata/movies/Polish.json'
import RomanticF from '../JSONdata/movies/Romantic.json'
import ScandinavianF from '../JSONdata/movies/Scandinavian.json'
import SpanishF from '../JSONdata/movies/Spanish.json'
import SportF from '../JSONdata/movies/Sports.json'
import SupernaturalF from '../JSONdata/movies/Supernatural.json'
import SwedishF from '../JSONdata/movies/Swedish.json'
import TeenF from '../JSONdata/movies/Teen.json'
import ThaiF from '../JSONdata/movies/Thai.json'
import TurkishF from '../JSONdata/movies/Turkish.json'
import SciFiF from '../JSONdata/movies/Sci-Fi.json'
import DutchF from '../JSONdata/movies/Dutch.json'
import BrazilianF from '../JSONdata/movies/Brazilian.json'

const MovieMain = ({width}) => {

    const search = useSelector(state => state.search)
    const [movies,setMovies] = useState()
    const dispatch = useDispatch()


    //this handleonsubmit , 
    // if the search term is inside genrekeysearchvalue we assume that it is a genre
    //so we will axios request with those options for genre
    //if it is not found we assume it is a search for movie
    //so we axios search for movie title
    //
    const handleOnSubmit = () => {
        var options;
        let mappingNameToObj = 
            {
                'Anime':anime,
                'Action':action,
                'British':british,
                'Crime':crime,
                'Comedies':comedies,
                'Teen':teen,
                'Documentary':documentary,
                'Dramas':dramas,
                'Fantasy':fantasy,
                'Food':food,
                'Horror':horror,
                'Indian':indian,
                'Japanese':japanese,
                'International':international,
                'K-drama':kdrama,
                'Kids':kids,
                'LGBTQ':lgbt,
                'Romance':romance,
                'Science':science,
                'Spanish':spanish,
                'Standup':standup,
                'Thriller':thriller,
                "Compete":compete,
                "African Films":AfricanF,
                "Crime Films":CrimeF,
                "Sci-Fi Films":SciFiF,
                "Anime Films":AnimeF,
                "Danish Films":DanishF,
                "Spanish Films":SpanishF,
                "Argentinian Films":ArgentinianF,
                "Dutch Films":DutchF,
                "Sports Films":SportF,
                "Asian Movies":AsianF,
                "Classic Films":ClassicF,
                "Supernatural Horror Films":SupernaturalF,
                "Academy Award-Winning Films":AwardF,
                "Japanese Films":JapaneseF,
                "Swedish Films":SwedishF,
                "Bollywood Films":BollywoodF,
                "LGBTQ Films":LGBTF,
                "Teen Films":TeenF,
                "British Films":BritishF,
                "Turkish Films":TurkishF,
                "Scandinavian Films":ScandinavianF,
                "Thai Films":ThaiF,
                "Polish Films":PolishF,
                "Romantic Films":RomanticF,
                "Brazilian Flims":BrazilianF
            }
        //if search is in array in display the object in the json files
        //if search is not true then axios call for search

        if(search.length !== 0){
            if(mappingNameToObj[search]){
                // console.log(search)
                setMovies(mappingNameToObj[search])
                // options = {
                //     method: 'GET',
                //     url: 'https://unogs-unogs-v1.p.rapidapi.com/search/titles',
                //     params: {genre_list: genreKeySearchValue[search], order_by: 'rating', limit: '25',type: typeOfMedia},
                //     headers: {
                //       'x-rapidapi-host': 'unogs-unogs-v1.p.rapidapi.com',
                //       'x-rapidapi-key': process.env.REACT_APP_REACT_KEY
                //     }
                //   };  
                // console.log(genreKeySearchValue[search],search)
            }else {
                let modifedSearch = search.split(" ").join("_")
                options = {
                    method: 'GET',
                    url: 'https://unogs-unogs-v1.p.rapidapi.com/search/titles',
                    params: {title: modifedSearch, order_by: 'rating', limit: '15'},
                    headers: {
                        'x-rapidapi-host': 'unogs-unogs-v1.p.rapidapi.com',
                        'x-rapidapi-key': process.env.REACT_APP_REACT_KEY
                    }
                };
                //this will add one to the redux state
                dispatch(APIADD())
                axios.request(options).then(function (response) {
                        if(response.data.results){
                            // console.log(response.data.results.filter(movie => movie.img));
                            setMovies(response.data.results.filter(movie => movie.img))
                            dispatch(UPDATEMOVIELIST(response.data.results.filter(movie => movie.img)))
                        }
                        else{
                            setMovies([])
                        }
                       
                }).catch(function (error) {
                    console.error(error);
                });
            }
        }

    }
    //this only triggers when a new search is made.
    //this will change the setmovie state ment for the render.map below
    useEffect(() => {
        handleOnSubmit()
      }, [search]); 

    if (!movies) return false
    return (
        <div>
        {   
        movies.length > 0
            ?
            // Why I need this absoluteValue?
            // cause I need to make the div shrink as the
            // window shrink
            <div >
                <div className="searchStatement">You search for {search.charAt(0).toUpperCase() + search.slice(1)}</div>
                <div className='movieDisplay'>
                    {/* <MovieCarousel array={movies}/> */}
                    {movies.map(movie =>
                        <div key={movie.title+movie.netflix_id} >
                            <MovieDisplay movie={movie} width={width} />
                        </div>
                        )
                    }
                </div> 
            </div>
            :<div className="searchStatement">You search for {search.charAt(0).toUpperCase() + search.slice(1)} but there are no result</div>

        }
        </div>
    )
}

export default MovieMain