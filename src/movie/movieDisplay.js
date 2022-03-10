import React from 'react'

function MovieDisplay({movie}) {
        // movie.primaryImage.url
        // console.log(movie)

  return (
    <div>
        {/* <h1>{id}</h1>  */}
        {movie.img && <img src={movie.img} width={150}/>}
        {/* <h1>{movie.primaryImage.id}</h1> */}
    </div>
  )
}

export default MovieDisplay