import React from "react";
import { useState } from "react";
const PersonForm = ({persons,setPersons}) => {

    const [newName,setnewName] = useState("")
    const [newNumber,setnewNumber] = useState("")

    // console.log(newName)

    const handleOnSubmit = (e) => {
        e.preventDefault()
        //making List of people in person
        let listOfPeople = persons.map(person => person.name)

        if (listOfPeople.includes(newName)){
            window.alert("There is a dup");
        }
        else{
            let updatePersonArray = [...persons]
        
            let newObj = {
                name:newName,
                number:newNumber,
                id:updatePersonArray.length+1
            }
    
            updatePersonArray.push(newObj)
    
            setPersons([...updatePersonArray])
            setnewName("")
            setnewNumber("")
        }

    }

    return(
        <div>
            <form>
                <div>
                    Name: <input 
                    onChange={(e) => setnewName(e.target.value)} 
                    value={newName}/>
                </div>

                <div>
                    Number: <input 
                    onChange={(e) => setnewNumber(e.target.value)} 
                    value={newNumber}/>
                </div>
                
                <div>
                    <button type="submit" 
                    onClick={handleOnSubmit}>add
                    </button></div>
            </form>
        </div>
    )
}
export default PersonForm