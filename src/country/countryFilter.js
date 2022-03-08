import { useState,useEffect } from "react";
import React from "react";
import axios from "axios";
import CountryDisplay from "./countryDisplay";
const CountryFilter = () => {


    const [filtercountries,setFilterCountries] = useState([])

    const [filtercountriesByInput,setfiltercountriesByInput] = useState("")


    const hook = () => {
        console.log("effect")
        axios
        .get(`https://restcountries.com/v3.1/name/${filtercountriesByInput}`)
        .then(res => setFilterCountries(res.data))
    }

    useEffect(hook,[filtercountriesByInput])

    return (
        <div>
            <div>
                Find Countries <input
                onChange={(e) => setfiltercountriesByInput(e.target.value)}
                value={filtercountriesByInput}
                />
            </div>
            <CountryDisplay countries={filtercountries} filtercountriesByInput={filtercountriesByInput} />
        </div>
    )
}

export default CountryFilter