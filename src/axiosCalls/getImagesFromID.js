import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch,useSelector } from "react-redux";
import { APIADD } from "../actions/apicallcounter";
import { ADDIMAGEOBJTOREDUXSTATE } from "../actions/addImageToReduxState";
const GetImagesFromID = ({netflix_id}) => {

    //This comp is for getting the boxart for one movie
    //Get ID from props
    //Make and axios call for that id
    //Set IMAGE state to those imageurl and type
    //Use the some method to set State for boURL for the first one it gets
    //If boUrl is null set it to a loading pic

    const [images,setImages] = useState([])
    const [boUrl,setboUrl] = useState("")
    const [counter,setCounter] = useState(0)
    const dispatch = useDispatch()
    useEffect(() => {
        var options = {
            method: 'GET',
            url: 'https://unogs-unogs-v1.p.rapidapi.com/title/images',
            params: {netflix_id: netflix_id},
            headers: {
              'x-rapidapi-host': 'unogs-unogs-v1.p.rapidapi.com',
              'x-rapidapi-key': 'b49a84c68fmshcd0c0ae889304fep1f8400jsncfc1f5dbf1ce'
            }
          };
          dispatch(APIADD())

          axios.request(options).then(function (response) {
            //   console.log(response.data.results);
              setImages(response.data.results)
          }).catch(function (error) {
              console.error(error);
          });
      }, []); // Only re-run the effect if count changes

      const getMeta = (url,type) => {   
        var img = new Image();
        img.onload = function() {
            // console.log(counter)

            if(this.width> 1000 && type[1] === "o" && counter === 0){
                setboUrl(url)
                setCounter(prev => prev+1)
                return true
                // console.log(url)

            }
        };
        img.src = url;
    }
    
    //So everytime images changes this will update setDimension
    useEffect(() => {
        if(!images) {
            return null
        }
        
        images.find(image => {
            // console.log(image.image_type)
            getMeta(image.url,image.image_type)
            }
        )
    },[images]) 

    useEffect(() => {
        if (boUrl !== 'https://media4.giphy.com/media/3o7bu3XilJ5BOiSGic/giphy.gif?cid=ecf05e47v8kdcu12ej71qnqetp7w9kvxnl2jrm0xin1u6byp&rid=giphy.gif&ct=g' && counter === 0) {
            console.log(boUrl)
            setCounter(prev => prev+1)
            dispatch(ADDIMAGEOBJTOREDUXSTATE({[netflix_id]:boUrl}))
        }
    },[boUrl])

    if(boUrl.length === 0){
        setboUrl("https://media4.giphy.com/media/3o7bu3XilJ5BOiSGic/giphy.gif?cid=ecf05e47v8kdcu12ej71qnqetp7w9kvxnl2jrm0xin1u6byp&rid=giphy.gif&ct=g")
    }
  return (
      <img className="getImagesFromID" src={boUrl}></img>
  )
}

export default GetImagesFromID


