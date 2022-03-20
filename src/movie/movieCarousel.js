import Carousel from 'react-elastic-carousel';
import Item from '../pages/item';
import React, { useState,useEffect } from 'react'
import SingleModal from './singleModal';
const MovieCarousel = ({array}) => {
    //This comp takes in an array and renders them out in a carousel
    const breakPoints = [
        { width: 1, itemsToShow: 2 },
        { width: 550, itemsToShow: 3 },
        { width: 700, itemsToShow: 4 },
        { width: 800, itemsToShow: 5 },
        { width: 1300, itemsToShow: 6 },
    ];
    return(
        <React.Fragment>
            <div className="carousel">
                <Carousel 
                itemsToScroll={5} 
                breakPoints={breakPoints} 
                enableSwipe={false} 
                >   
                
                {array.map(item => {
                    return (
                        <div className='singleCarouselItem'  key={item.title}>
                            <Item >
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