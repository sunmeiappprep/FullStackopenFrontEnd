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


        //checking if there is a dup in the listofpeople
        if (listOfPeople.includes(newName)){
            window.alert("There is a dup");
        }
        else{
            //Destruct persons array
            let updatePersonArray = [...persons]
            //Combine all input into one obj
            let newObj = {
                name:newName,
                number:newNumber,
                id:updatePersonArray.length+1
            }
            
            //adding obj to newarray    
            updatePersonArray.push(newObj)
            
            //update the state with new array
            setPersons([...updatePersonArray])
            
            //clear out feilds
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