import React from "react";
import { useState } from "react";

const CountryDisplayOne = ({singleCountry}) => {
    const [showBoo,setshowBoo] = useState(false)

    //if boolean is true then show country info    
    //Also show the hide as well
    //If bool is false only show the name and the show button
    let countyInfo = 
        showBoo
        ?
        <div>
            <ul>{singleCountry.name.common}</ul>
            <ul>{singleCountry.capital}</ul>
            <ul>{singleCountry.area}</ul>
                {Object.values(singleCountry.languages).map(language => 
                        <div key={singleCountry.capital}>
                            <ul>{language}</ul>
                        </div>
                )}
            <ul><img src={singleCountry.flags.png}></img></ul>
        
            <div>{singleCountry.name.common}<button onClick={() => setshowBoo(!showBoo)}>Hide</button></div>
        </div>
        :<div>
            <div>{singleCountry.name.common}<button onClick={() => setshowBoo(!showBoo)}>Show</button></div>
        </div>

    return(
        <div>
            {countyInfo}
        </div>
    )

}
export default CountryDisplayOne

