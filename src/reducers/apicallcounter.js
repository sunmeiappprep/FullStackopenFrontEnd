const apicallcounterReducer = (state = 0,action) => {
    switch (action.type) {
        case 'APIADD':
            return state + 1
        default:
            return state
    }
}

export default apicallcounterReducer