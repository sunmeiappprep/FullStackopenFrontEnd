import Carousel from 'react-elastic-carousel';
import Item from '../pages/item';
import React, { useState,useEffect } from 'react'
import SingleModal from './singleModal';
const MovieCarousel = ({array}) => {
    //This comp takes in an array and renders them out in a carousel
    const breakPoints = [
        { width: 1, itemsToShow: 2 },
        { width: 550, itemsToShow: 3 },
        { width: 768, itemsToShow: 4 },
        { width: 1100, itemsToShow: 5 },
        { width: 1400, itemsToShow: 6 },
    ];
    return(
        <React.Fragment>
            <div className="carousel">
                <Carousel 
                itemsToScroll={5} 
                breakPoints={breakPoints} 
                enableSwipe={true} 
                >   
                {array.map(item => {
                    return (
                        <div key={item.title}>
                            <Item>
                                <SingleModal singleMovie={item}/>
                            </Item>
                        </div>
                    )
                }
                )}
                </Carousel>


            </div>
        </React.Fragment>
    )
}

export default MovieCarousel