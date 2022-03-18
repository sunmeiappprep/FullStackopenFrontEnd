const updateMediaReducer = (state = "",action) => {
    switch (action.type) {
        case 'UPDATETYPEOFMEDIA':
            return action.data
        default:
            return state
    }
}

export default updateMediaReducer

