//So here comes the NAME of the action the 

const searchReducer = (state = "",action) => {
    switch (action.type) {
        case 'NEWSUBMIT':
            return action.data
        default:
            return state
    }
}

export default searchReducer

