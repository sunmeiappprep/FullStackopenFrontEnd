import React from 'react'
const MovieSearch = ({movieSearch,setmovieSearch,handleOnSubmit}) => {

    const displayhandleOnSubmit = (e) => {
        e.preventDefault();
        handleOnSubmit()
    }

  return (
    <div id='MovieSearch'>
        <form onSubmit={(e) => displayhandleOnSubmit(e)}>
            <div>
            
            <input
            onChange={(e) => setmovieSearch(e.target.value)}
            value={movieSearch}
            
            />
            <button onClick={(e) => displayhandleOnSubmit(e)}>Search</button>
            </div>
            
        </form>
    </div>
  )
}

export default MovieSearch