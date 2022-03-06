import PersonForm from "./personForm";
import React from "react";
import { useState,useEffect } from "react";

const PersonDisplay = ({persons}) =>{
    return(
        <div>
            {
                persons.map(person => 
                    <div>
                        {person.name} {person.number}
                    </div>
                )
            }
        </div>
    )
}

export default PersonDisplay