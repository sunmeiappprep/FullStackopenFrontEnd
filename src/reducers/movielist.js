const movielistReducer = (state = [],action) => {
    switch (action.type) {
        case 'UPDATEMOVIELIST':
            return action.data
        default:
            return state
    }
}

export default movielistReducer