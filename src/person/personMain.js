import React from "react";
import PersonDisplay from "./personDisplay";
import PersonForm from "./personForm";
import { useState,useEffect } from "react";
import PersonFilter from "./personFilter";
const PersonMain = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456', id: 1 },
        { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
        { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
        { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
      ])

    return(
        <div>
            <PersonForm setPersons={setPersons} persons={persons}/>
            <PersonDisplay persons={persons}/>
            <PersonFilter persons={persons}/>
        </div>
    )
}

export default PersonMain