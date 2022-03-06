import React from "react";
import { useState } from "react";
import PersonDisplay from "./personDisplay";
const PersonFilter = ({persons}) => {

    const [Search,setSearch] = useState("")

    const filterArry = persons.filter(person => 
        person.name.toLowerCase().includes(Search.toLowerCase())
        )
    
    return(
        <div>
            <div>
                Name: <input
                onChange={(e) => setSearch(e.target.value)}
                value={Search}
                />
            </div>

            {
                <PersonDisplay persons={filterArry}/>
            }
        </div>
    )

}

export default PersonFilter