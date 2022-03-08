import axios from "axios";
import React from "react";
import { useState,useEffect } from "react";
import CountryFilter from "./countryFilter";
const CountryMain = () =>{
    // const [countries,setCountries] = useState("")
    

    return(
        <div>
            This is countryMain
            <CountryFilter/>
        </div>
    )

}

export default CountryMain