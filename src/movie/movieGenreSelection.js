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
                typeOfFormat === "TV Show"
                ?
                    genreMenuIsOpen 
                    &&
                    <div className="tableContainer">
                    <table className="table">
                        <tbody>
                            <tr>
                            <td onClick={() => handleGenre("Action")}>Action</td>	
                                <td onClick={() => handleGenre("Dramas")}>Dramas</td>
                                <td onClick={() => handleGenre("Fantasy")}>Fantasy</td>
                            </tr>
                            <tr>
                                <td onClick={() => handleGenre("Anime")}>Anime</td>
                                <td onClick={() => handleGenre("Horror")}>Horror</td>
                                <td onClick={() => handleGenre("Science")}>Science & Nature TV</td>
                            </tr>
                            <tr>
                                <td onClick={() => handleGenre("British")}>British</td>
                                <td onClick={() => handleGenre("International")}>International</td>
                                <td onClick={() => handleGenre("Standup")}>Stand-up & Chat Shows</td>
                            </tr>
                            <tr>
                                <td onClick={() => handleGenre("Comedies")}>Classic Comedies</td>
                                <td onClick={() => handleGenre("K-drama")}>K-Dramas</td>
                                <td onClick={() => handleGenre("Spanish")}>Spanish TV</td>
                            </tr>
                            <tr>
                                <td onClick={() => handleGenre("Food")}>Food & Travel TV</td>
                                <td onClick={() => handleGenre("Kids")}>Kids Music</td>
                                <td onClick={() => handleGenre("Teen")}>Teen</td>
                            </tr>
                            <tr>
                                <td onClick={() => handleGenre("Indian")}>Indian</td>
                                <td onClick={() => handleGenre("LGBTQ")}>LGBTQ</td>
                            </tr>
                            <tr>
                                <td onClick={() => handleGenre("Crime")}>Crime</td>
                                <td onClick={() => handleGenre("Thriller")}>Thriller</td>
                            </tr> 
                            <tr>
                            </tr>
                            <tr>
                                <td onClick={() => handleGenre("Compete")}>Competition Reality TV</td>
                                <td onClick={() => handleGenre("Japanese")}>Japanese</td>
            
                            </tr>
                            <tr>
                                <td onClick={() => handleGenre("Documentary")}>Documentaries</td>
                                <td onClick={() => handleGenre("Romance")}>Romance</td>
                            
                            </tr> 

                        </tbody>
                    </table>
                </div>
                 
                : genreMenuIsOpen 
                &&
                <div className="tableContainer">
                <table className="table">
                    <tbody>
                        <tr>
                            <td onClick={() => handleGenre("African Films")}>African</td>	
                            <td onClick={() => handleGenre("Crime Films")}>Crime</td>
                            <td onClick={() => handleGenre("Sci-Fi Films")}>Sci-Fi</td>
                        </tr>
                        <tr>
                            <td onClick={() => handleGenre("Anime Films")}>Anime</td>
                            <td onClick={() => handleGenre("Danish Films")}>Danish</td>
                            <td onClick={() => handleGenre("Spanish Films")}>Spanish</td>
                        </tr>
                        <tr>
                            <td onClick={() => handleGenre("Argentinian Films")}>Argentinian</td>
                            <td onClick={() => handleGenre("Dutch Films")}>Dutch</td>
                            <td onClick={() => handleGenre("Sports Films")}>Sports</td>
                        </tr>
                        <tr>
                            <td onClick={() => handleGenre("Asian Movies")}>Asian</td>
                            <td onClick={() => handleGenre("Classic Horror Films")}>Horror</td>
                            <td onClick={() => handleGenre("Supernatural Horror Films")}>Supernatural</td>
                        </tr>
                        <tr>
                            <td onClick={() => handleGenre("Academy Award-Winning Films")}>Award</td>
                            <td onClick={() => handleGenre("Japanese Films")}>Japanese</td>
                            <td onClick={() => handleGenre("Swedish Films")}>Swedish</td>
                        </tr>
                        <tr>
                            <td onClick={() => handleGenre("Bollywood Films")}>Bollywood</td>
                            <td onClick={() => handleGenre("LGBTQ Films")}>LGBTQ</td>
                            <td onClick={() => handleGenre("Teen Films")}>Teen</td>

                        </tr>
                        <tr>
                            <td onClick={() => handleGenre("Brazilian Flims")}>Brazilian</td>
                            <td onClick={() => handleGenre("Polish Films")}>Polish</td>
                            <td onClick={() => handleGenre("Thai Films")}>Thai</td>
                        </tr> 
                        <tr>
                        </tr>
                        <tr>
                            <td onClick={() => handleGenre("British Films")}>British</td>
                            <td onClick={() => handleGenre("Romantic Films")}>Romantic</td>
                            <td onClick={() => handleGenre("Turkish Films")}>Turkish</td>
        
                        </tr>
                        <tr>
                            <td onClick={() => handleGenre("Classic Films")}>Classic</td>
                            <td onClick={() => handleGenre("Scandinavian Films")}>Scandinavian</td>
                        
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