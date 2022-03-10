import React from 'react'

const MovieSearch = ({movieSearch,setmovieSearch}) => {


  return (
    <div>
        <form>
            <div>
            Search
            <input
            onChange={(e) => setmovieSearch(e.target.value)}
            value={movieSearch}
            
            />
            </div>
            
        </form>
    </div>
  )
}

export default MovieSearch