import axios from "axios";
import React from "react";
import { useState,useEffect } from "react";
import CountryFilter from "./countryFilter";
const CountryMain = () =>{
    // const [countries,setCountries] = useState("")
    var axios = require("axios").default;

    var options = {
    method: 'GET',
    url: 'https://unogsng.p.rapidapi.com/genres',
    headers: {
        'x-rapidapi-host': 'unogsng.p.rapidapi.com',
        'x-rapidapi-key': '62798ccdddmsh0ad4d937ff9cc37p163a8ajsn7dd2795009fe'
    }
    };

    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });

    return(
        <div>
            This is countryMain
            <CountryFilter/>
        </div>
    )

}

export default CountryMain