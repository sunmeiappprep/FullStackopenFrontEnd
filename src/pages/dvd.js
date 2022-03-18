import React, { useState,useEffect } from 'react'
import NavbarMain from '../navbar/navbarMain'
import MovieCarousel from '../movie/movieCarousel';
import BackgroundFootage from '../images/backgroundFootage';
import { useSelector } from 'react-redux';

import items3 from '../JSONdata/testing.json'
import anime from '../JSONdata/tvshows/anime.json'

const Dvd = () => {

    // const arrayOfImageObject = useSelector(state => state.arrayOfImageObject)
    // console.log(arrayOfImageObject)
    //   const items3 = [
    //     {
    //         "title": "1942: A Love Story",
    //         "img": "https://occ-0-2042-299.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABa4cPLNp-A5KjgDX_fu7bVP-EAFigCEuYM9ZDBbF01HJDo4E3rulTUHgyTmACRWcc4nDN2SNvwxhxR4bwfFZP7kNmQ.jpg?r=f97",
    //         "title_type": "movie",
    //         "netflix_id": 206593,
    //         "synopsis": "In a small Himalayan town, Rajeshwari and Naren fall passionately in love -- even as the world around them crumbles. But when a band of revolutionaries with a charismatic leader comes to town, the spirit of freedom threatens their future together.",
    //         "rating": "0",
    //         "year": "1993",
    //         "runtime": "9113",
    //         "imdb_id": "tt0109010",
    //         "poster": "https://m.media-amazon.com/images/M/MV5BMjcxNTA4NDczNl5BMl5BanBnXkFtZTcwMDI2ODgzMQ@@._V1_SX300.jpg",
    //         "top250": 0,
    //         "top250tv": 0,
    //         "title_date": "2019-08-01"
    //     },
    //     {
    //         "title": "Ace Ventura: Pet Detective",
    //         "img": "https://occ-0-1926-41.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABR5C8rHk6ick0AtE2EbqL0KwLmy5hhdkDy6-wsNjDMh3ez5QvKcVIbgFlyNytcXUs4flgevCKbegxCvEq7Ai3K0Kxg.jpg?r=c6d",
    //         "title_type": "movie",
    //         "netflix_id": 215309,
    //         "synopsis": "Barely competent pet private eye Ace Ventura is put on the case when kidnappers with an ax to grind abduct Snowflake, the Miami Dolphins&#39; mascot.",
    //         "rating": "3.408591",
    //         "year": "1994",
    //         "runtime": "5157",
    //         "imdb_id": "tt0109040",
    //         "poster": "N/A",
    //         "top250": 0,
    //         "top250tv": 0,
    //         "title_date": "2016-09-24"
    //     },


    // ]

    let item2 = [
        
        {
            "title": "Assault on Precinct 13",
            "img": "http://cdn0.nflximg.net/images/3186/3863186.jpg",
            "title_type": "movie",
            "netflix_id": 265971,
            "synopsis": "Members of an understaffed almost-abandoned police station battle against a bloodthirsty gang&#39;s angry horde gathering outside the precinct&#39;s walls.",
            "rating": "3.3",
            "year": "1976",
            "runtime": "0",
            "imdb_id": "tt0074156",
            "poster": "N/A",
            "top250": 0,
            "top250tv": 0,
            "title_date": "2015-04-14"
        },
        {
            "title": "The Associate",
            "img": "https://occ-0-4405-1380.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABWIcdcNDnHpHHKhsg8QW4oy7KGKjIvjNAdwEnYk2m3k8XOgiThSY8of6vLDZ5OlgTUR45qntx51T9rALrjRI_VWAUQ.jpg?r=a7e",
            "title_type": "movie",
            "netflix_id": 266076,
            "synopsis": "When Laurel&#39;s sexist protégé is promoted, she quits to start her own company -- but Wall Street won&#39;t take an African-American woman seriously.",
            "rating": "0",
            "year": "1996",
            "runtime": "6821",
            "imdb_id": "tt0115580",
            "poster": "https://m.media-amazon.com/images/M/MV5BOTM1YmU1MjEtOTgyYS00ZjQ1LWJiYWQtMTg0NTAyZDMzN2U1XkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_SX300.jpg",
            "top250": 0,
            "top250tv": 0,
            "title_date": "2021-04-02"
        },
    ]

    let items1 = [
        {
            "title": "Ace Ventura: When Nature Calls",
            "img": "https://occ-0-1926-41.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABd2CXwqVibqQ6X3SBFL7ADm7zczv73tuNxCW2zDwA-4SEW5Nkdfnybwn5MXfVE1fHv4IBxtpYBkjF3EZQoqHKWkHkA.jpg?r=914",
            "title_type": "movie",
            "netflix_id": 215318,
            "synopsis": "Ace travels to the jungles of Africa to recover a rare white bat. But if he fails, a war with the violent Wachootoo tribe is sure to follow.",
            "rating": "3.3513145",
            "year": "1995",
            "runtime": "5641",
            "imdb_id": "tt0112281",
            "poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BNGFiYTgxZDctNGI4OS00MWU1LWIwOGUtZmMyNGQxYjVkZjQ3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
            "top250": 0,
            "top250tv": 0,
            "title_date": "2016-09-21"
        },
        {
            "title": "The Addams Family",
            "img": "https://occ-0-2773-2774.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABUdAFoJN2_I4orcZddauwY3G8MtnGM_pMXpqqnsqFtIMIzKvUEyaez7ygoUQjPiKOLW9OTk4gH8y50DJ8Po0t75I1w.jpg?r=18d",
            "title_type": "movie",
            "netflix_id": 217258,
            "synopsis": "Stepping out of the pages of Charles Addams&#39; cartoons and the 1960s television series, members of the beloved, macabre family take to the big screen.",
            "rating": "3.6470737",
            "year": "1991",
            "runtime": "5976",
            "imdb_id": "tt0101272",
            "poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BODc1NmY0MDUtNjUzNS00ODdhLWJlN2ItMTgwZjczZjI0MDkyXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
            "top250": 0,
            "top250tv": 0,
            "title_date": "2015-04-14"
        },
        {
            "title": "Addams Family Values",
            "img": "https://occ-0-1490-1489.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAAAfGtBwNZIZUxJDLLQTrqJnPlJ7AKC3XyFgCoxnfa_76LflrUwAcTW1mLaevUBPgVJ0AnkCcqKxP7CmDPutbZIJILOQ.jpg?r=d47",
            "title_type": "movie",
            "netflix_id": 217303,
            "synopsis": "Siblings Wednesday and Pugsley Addams will stop at nothing to get rid of Pubert, the new baby boy adored by parents Gomez and Morticia.",
            "rating": "3.6894681",
            "year": "1993",
            "runtime": "5652",
            "imdb_id": "tt0106220",
            "poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BZWFhNjY0YjItNjM5NC00NzAwLWI3ZWUtMTlkNTA0ZWVkNjBkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
            "top250": 0,
            "top250tv": 0,
            "title_date": "2015-04-14"
        },
        {
            "title": "Against All Odds",
            "img": "https://occ-0-2851-38.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABQLRgUUEW1ERizQ0QVFwll7ldXWFoWGHUJ0wh3fJkp9URt6FSKMpSyitgnrc5qYufG_SHlL530HaRnxVZsyKL1uiDg.jpg?r=603",
            "title_type": "movie",
            "netflix_id": 234365,
            "synopsis": "An ex-football player agrees to track down a sleazy nightclub owner&#39;s mistress -- but when he finds the elusive woman in Mexico, he falls in love.",
            "rating": "3.0973203",
            "year": "1984",
            "runtime": "7282",
            "imdb_id": "tt0086859",
            "poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BYThmYzNiMTYtYzNhNy00ZmI2LWI0MmYtYWY0NDA5Y2EyZGNjXkEyXkFqcGdeQXVyMTA0MjU0Ng@@._V1_SX300.jpg",
            "top250": 0,
            "top250tv": 0,
            "title_date": "2016-10-19"
        },
        {
            "title": "Agneepath",
            "img": "https://occ-0-2851-38.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABfv6C6c3LupVUwb2Z-N_uLZQTKL3Ru3PawdPaUXwA4YRG7kRI-tFazBIWQjKgtf66kYEMwteRJAhAY_ds7n6cL9PMA.jpg?r=187",
            "title_type": "movie",
            "netflix_id": 235527,
            "synopsis": "A boy grows up to become a gangster in pursuit of the mobster who killed his innocent father, but revenge and reparation may come at great costs.",
            "rating": "0",
            "year": "1990",
            "runtime": "10452",
            "imdb_id": "tt0098999",
            "poster": "https://m.media-amazon.com/images/M/MV5BOGIyNGNhN2EtYTZiNC00MDJjLWI2M2ItZjA1MTBlYmNiODNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
            "top250": 0,
            "top250tv": 0,
            "title_date": "2020-04-01"
        },
        {
            "title": "All About Ah-Long",
            "img": "https://occ-0-64-325.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABa1OyX0sl13f8fHnIZRy464STJHfagxadKg49G5ybCwrUduWR-MHrKZPdEuH6uN27CypO0L7w2kBrqDIWf8wDDQ78A.jpg?r=6de",
            "title_type": "movie",
            "netflix_id": 242070,
            "synopsis": "In 1980s Hong Kong, a struggling but devoted single dad’s bond with his son is threatened when the child’s long-lost mother wants to take him away.",
            "rating": "0",
            "year": "1989",
            "runtime": "5980",
            "imdb_id": "tt0098694",
            "poster": "https://m.media-amazon.com/images/M/MV5BMzMxMDM1NzYtNzI2NS00OWZhLThmZWQtYTA2NDhmM2E0MWUwXkEyXkFqcGdeQXVyMTMxMTY0OTQ@._V1_SX300.jpg",
            "top250": 0,
            "top250tv": 0,
            "title_date": "2018-12-27"
        },
        {
            "title": "Always",
            "img": "https://occ-0-2794-2218.1.nflxso.net/dnm/api/v6/XsrytRUxks8BtTRf9HNlZkW2tvY/AAAABSloiTSRUgd0hIx9K-zdSV_rN27AOKr_Jj9BEqfvE4vwQIicjBYDAfEzusOGi7r4s8YEx37yzQPpcaYIavKRBMEtN2Iskvc.jpg?r=ef4",
            "title_type": "movie",
            "netflix_id": 246920,
            "synopsis": "A firefighting pilot who dies and becomes a guardian angel to new pilot Ted Baker has trouble dealing with Ted&#39;s feelings for the girl he left behind.",
            "rating": "3.5951767",
            "year": "1989",
            "runtime": "7342",
            "imdb_id": "tt0096794",
            "poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BYjcwODQ0YmItZGUwNC00MDYxLWIyZmItMzQ5YTJlNzZlNzE0XkEyXkFqcGdeQXVyNTI4MjkwNjA@._V1_SX300.jpg",
            "top250": 0,
            "top250tv": 0,
            "title_date": "2016-03-01"
        },
        {
            "title": "Apollo 13",
            "img": "https://occ-0-768-769.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABUePg44xB4dT2f_4ex0MG_jkIbeUsJMSIuGJ7zoRfj2c1-y4QXdek2KWDdwwDSozioO2AUChL0msXGihhks4bJmFhw.jpg?r=fb7",
            "title_type": "movie",
            "netflix_id": 262866,
            "synopsis": "Technical troubles scuttle the Apollo 13 mission in 1971, risking the lives of astronaut Jim Lovell and his crew in this chronicle of a true story.",
            "rating": "4.009185",
            "year": "1995",
            "runtime": "8386",
            "imdb_id": "tt0112384",
            "poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BNjEzYjJmNzgtNDkwNy00MTQ4LTlmMWMtNzA4YjE2NjI0ZDg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
            "top250": 0,
            "top250tv": 0,
            "title_date": "2015-04-14"
        },
    ]


    // const netflixID = [
    //     206593,
    //     215309,
    //     215318,
    //     217258,
    //     217303,
    //     234365,
    //     235527,
    //     242070,
    //     246920,
    //     262866,
    //     265929,
    //     265971,
    //     266076
    // ]

    // const myArrow = ({ type, onClick, isEdge }) => {
    //     const pointer = type === consts.PREV ? '👈' : '👉'
    //     return (
    //       <Button onClick={onClick} disabled={isEdge}>
    //         {pointer}
    //       </Button>
    //     )
    //   }

    return (
        <React.Fragment>
            <NavbarMain/>
            <BackgroundFootage/>
            <div className="movieCarouselContainer">
                <MovieCarousel array={anime}/>
                {/* <MovieCarousel array={item2}/> */}
                {/* <MovieCarousel array={items1}/> */}
            </div>




        </React.Fragment>
    )
}

export default Dvd

