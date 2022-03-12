
//This is the "NAME" of action that will be send to the reducer 
//If this function takes in parameter be sure to make a new field called data or payload and pass in along to the reducer

export const NEWSUBMIT = (searchTerm) => {
    return {
        type: "NEWSUBMIT",
        data: searchTerm
    }
}

