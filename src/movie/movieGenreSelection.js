import React from 'react'
import { NEWSUBMIT } from '../actions/search.js';
import { useSelector,useDispatch } from "react-redux";
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef} from 'react';
import { UPDATETYPEOFMEDIA } from '../actions/updatemedia.js';
const MovieGenreSelection = ({typeOfFormat,typeOfMediaForSearch}) => {
    
    const dispatch = useDispatch()
    const [genreMenuIsOpen,setGenreMenuIsOpen] = useState(false)
    const genreDiv = useRef(null);
    // const reduxStateSound = 
    const handleGenre = (genre) => {
        //only need dispatch to update redux state because
        // I have a useeffect
        dispatch(NEWSUBMIT(genre))
        dispatch(UPDATETYPEOFMEDIA(typeOfMediaForSearch))
    }

    const useOutsideAlerter = (ref) => {
        useEffect(() => {
            /**
             * Alert if clicked on outside of element
             */
            const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setGenreMenuIsOpen(false)
            }
            }
            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
            };
        }, []);
        }
    
        useOutsideAlerter(genreDiv)

  return (
    <div className='genreSelectionContainer'>
        <div className='tvShowOrMovie'>{typeOfFormat}</div>
        <div className='genreSelection' ref={genreDiv} onClick={() => setGenreMenuIsOpen(!genreMenuIsOpen)}>
            <select className='selectDropDown' disabled >
            <option >Genres</option>
            </select>
            {
                genreMenuIsOpen 
                &&
                <div className="tableContainer">
                <table className="table">
                    <tbody>
                        <tr>
                            <td onClick={() => handleGenre("Action & Adventure Programmes")}>Action</td>	
                            <td onClick={() => handleGenre("Drama Programmes")}>Dramas</td>
                            <td onClick={() => handleGenre("Fantasy TV Programmes")}>Fantasy</td>
                        </tr>
                        <tr>
                            <td onClick={() => handleGenre("Anime")}>Anime</td>
                            <td onClick={() => handleGenre("Horror Programmes")}>Horror</td>
                            <td onClick={() => handleGenre("Science & Nature TV")}>Science & Nature TV</td>
                        </tr>
                        <tr>
                            <td onClick={() => handleGenre("British")}>British</td>
                            <td onClick={() => handleGenre("International Programmes")}>International</td>
                            <td onClick={() => handleGenre("Stand-up & Chat Shows")}>Stand-up & Chat Shows</td>
                        </tr>
                        <tr>
                            <td onClick={() => handleGenre("Comedy Programmes")}>Classic Comedies</td>
                            <td onClick={() => handleGenre("K-dramas")}>K-Dramas</td>
                            <td onClick={() => handleGenre("Spanish TV Programmes")}>Spanish TV</td>
                        </tr>
                        <tr>
                            <td onClick={() => handleGenre("Food & Travel TV")}>Food & Travel TV</td>
                            <td onClick={() => handleGenre("Kids Music")}>Kids Music</td>
                            <td onClick={() => handleGenre("Teen Programmes")}>Teen</td>
                        </tr>
                        <tr>
                            <td onClick={() => handleGenre("Indian Programmes")}>Indian</td>
                            <td onClick={() => handleGenre("Gay & Lesbian TV Programmes")}>LGBTQ</td>
                        </tr>
                        <tr>
                            <td onClick={() => handleGenre("Crime TV Dramas")}>Crime</td>
                            <td onClick={() => handleGenre("Thriller Programmes")}>Thriller</td>
                        </tr> 
                        <tr>
                        </tr>
                        <tr>
                            <td onClick={() => handleGenre("Competition Reality TV")}>Competition Reality TV</td>
                            <td onClick={() => handleGenre("Japanese TV Dramas")}>Japanese</td>
        
                        </tr>
                        <tr>
                            <td onClick={() => handleGenre("Documentary Programmes")}>Documentaries</td>
                            <td onClick={() => handleGenre("Romance Programmes")}>Romance</td>
                        
                        </tr> 
        
                    </tbody>
        
                    
                </table>
            </div>
             }
        </div>  
    </div>



  )
}

export default MovieGenreSelection