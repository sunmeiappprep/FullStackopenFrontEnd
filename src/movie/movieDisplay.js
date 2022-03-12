import React from 'react'
import Modal from 'react-modal/lib/components/Modal'
import { useState } from 'react'
import MovieSearch from './movieSearch'
import MovieImage from './movieImage'
Modal.setAppElement('#root')
function MovieDisplay({movie}) {
        // movie.primaryImage.url
        // console.log(movie)
        const[modalIsOpen,setModalIsOpen] = useState(false)
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
    let hasImg = movie.img
    let hasPoster = movie.poster

  return (
    <div >
        {hasImg && <img onClick={()=>setModalIsOpen(true)} src={movie.img} width={150}/>}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          style = {
            {
              overlay: {
                backgroundColor:"black"
              },
              content: {
                color:'green',
                backgroundColor:'gray'
              }
            }
          }
        >
          <MovieImage netflix_id={movie.netflix_id} 
          title={movie.title}
          synopsis={movie.synopsis}
          poster={movie.img}/>
          <h1>asd</h1>
          <h2>asd</h2>
          <h3>asd</h3>
          <h4>asd</h4>
        </Modal>
        {/* <Modal/> */}
    </div>
  )
}

export default MovieDisplay