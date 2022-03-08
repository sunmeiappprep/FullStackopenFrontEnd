import React from "react";
import { useState } from "react";
import CountryDisplayOne from "./countryDisplayOne";
const CountryDisplay = ({countries,filtercountriesByInput}) => {
    console.log(!countries)

    let countriesGreaterThan10 = countries.length > 10

    //if searchs results are great than 10 then it will ask to be more spec
    //Only when country has an input
    //else it will render countries with name and show with the comp DisplayOne

    let renderSearches =
            countriesGreaterThan10
            ? filtercountriesByInput.length > 0 
                ?<div>Please be more spec</div>
                :null
            : countries.map(country => 
            <div key={country.name.common}>
                <CountryDisplayOne singleCountry={country}/>
            </div>    
    )

    return (
        <div>
            {renderSearches}
        </div>
    )
}

export default CountryDisplay