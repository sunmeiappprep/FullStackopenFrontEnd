import React from 'react'

function MovieDisplay({movie}) {
        // movie.primaryImage.url
        // console.log(movie)
        let test = {
            "title": "Superman Returns",
            "img": "https://occ-0-2851-38.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABUj1Z_DG7PosuovOOvMQokGRQhDZw0ac4UqFfLE1od2I0wxrgY0AJXNoSRfXoZ2rDtOxbwlU0mTdA60KhhX9C342_Q.jpg?r=256",
            "title_type": "movie",
            "netflix_id": 70041963,
            "synopsis": "When Superman returns to Metropolis, he finds that Lois Lane has moved on to another man and Lex Luthor is developing a new plan to rule the world.",
            "rating": "3.3641756",
            "year": "2006",
            "runtime": "9255",
            "imdb_id": "tt0348150",
            "poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU3NzA5MjI0Nl5BMl5BanBnXkFtZTcwMTEwNzMzMQ@@._V1_SX300.jpg",
            "top250": 0,
            "top250tv": 0,
            "title_date": "2015-04-14"
        }
        // console.log(movie.rating)
    let hasImgAndWithInLastdecade = movie.img && movie.year > 2010
  return (
    <div >
        {hasImgAndWithInLastdecade && <img src={movie.img} width={150}/>}
    </div>
  )
}

export default MovieDisplay