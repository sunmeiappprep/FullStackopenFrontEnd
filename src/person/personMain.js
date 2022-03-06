import React, { useEffect } from "react";
import PersonDisplay from "./personDisplay";
import PersonForm from "./personForm";
import { useState } from "react";
import PersonFilter from "./personFilter";
import axios from "axios";
const PersonMain = () => {
    

    const [persons, setPersons] = useState([])
    const [count, setCount] = useState(0)


    // const promise = axios.get('http://localhost:3001/persons')
    const hook = () => {
        //Effect logic block
        setCount(count+1)

        //axios returns a promise a promise has a .then with a response, 
        //that respon has data
        axios
          .get('http://localhost:3001/persons')
          .then(response => {
            console.log('promise fulfilled')
            setPersons(response.data)
          })
      }

    useEffect(hook, [])
    // promise.then(res => setPersons(res.data))
    return(
        <div>
            {count}
            <PersonForm setPersons={setPersons} persons={persons}/>
            <PersonDisplay persons={persons}/>
            <PersonFilter persons={persons}/>
        </div>
    )
}

export default PersonMain