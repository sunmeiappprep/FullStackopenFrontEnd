import React from 'react'
import { NEWSUBMIT } from '../actions/search.js';
import { useSelector,useDispatch } from "react-redux";
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef} from 'react';
const MovieGenreSelection = () => {
    
    const dispatch = useDispatch()
    const [genreMenuIsOpen,setGenreMenuIsOpen] = useState(false)
    const genreDiv = useRef(null);

    const handleGenre = (genre) => {
        //only need dispatch to update redux state because
        // I have a useeffect
        dispatch(NEWSUBMIT(genre))
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
    <div className='tvShowOrMovie'>TV Shows</div>
    <div className='genreSelection' ref={genreDiv} onClick={() => setGenreMenuIsOpen(!genreMenuIsOpen)}>
        <select className='selectDropDown' disabled>
        <option >Genres</option>
        </select>
        {
            genreMenuIsOpen 
            &&
            <div className="tableContainer">
            <table className="table">
                <tbody>
                    <tr>
                        <td onClick={() => handleGenre("Action")}>Action</td>	
                        <td onClick={() => handleGenre("US TV Dramas")}>Dramas</td>
                        <td onClick={() => handleGenre("Sci-Fi & Fantasy")}>Sci-Fi & Fantasy</td>
                    </tr>
                    <tr>
                        <td onClick={() => handleGenre("Anime")}>Anime</td>
                        <td onClick={() => handleGenre("Horror Films")}>Horror</td>
                        <td onClick={() => handleGenre("Science & Nature TV")}>Science & Nature TV</td>
                    </tr>
                    <tr>
                        <td onClick={() => handleGenre("African Films")}>Black Stories</td>
                        <td onClick={() => handleGenre("Classic International Movies")}>International</td>
                        <td onClick={() => handleGenre("Stand-up & Chat Shows")}>Stand-up & Chat Shows</td>
                    </tr>
                    <tr>
                        <td onClick={() => handleGenre("Classic Comedies")}>Classic Comedies</td>
                        <td onClick={() => handleGenre("K-dramas")}>K-Dramas</td>
                        <td onClick={() => handleGenre("Spanish TV Programmes")}>Spanish TV</td>
                    </tr>
                    <tr>
                        <td onClick={() => handleGenre("Cult Films")}>Cult Films</td>
                        <td onClick={() => handleGenre("Kids TV for ages 8 to 10")}>Kids</td>
                        <td onClick={() => handleGenre("Teen TV Dramas")}>Teen</td>
                    </tr>
                    <tr>
                        <td onClick={() => handleGenre("Classic Comedies")}>Classic Comedies</td>
                        <td onClick={() => handleGenre("Gay & Lesbian TV Programmes")}>LGBTQ</td>
                    </tr>
                    <tr>
                        <td onClick={() => handleGenre("Crime Action & Adventure")}>Crime</td>
                        <td onClick={() => handleGenre("Suspenses")}>Mysteries</td>
                    </tr> 
                    <tr>
                    </tr>
                    <tr>
                        <td onClick={() => handleGenre("Golden Globe Award-winning Films")}>Critics Choice Awards</td>
                        <td onClick={() => handleGenre("Reality Programmes")}>Reality</td>
    
                    </tr>
                    <tr>
                        <td onClick={() => handleGenre("Documentary Programmes")}>Documentaries</td>
                        <td onClick={() => handleGenre("Quirky Romance")}>Romance</td>
                    
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