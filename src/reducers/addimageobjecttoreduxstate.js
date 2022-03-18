const addimageobjecttoreduxstateReducer = (state = [],action) => {
    switch (action.type) {
        case 'ADDIMAGEOBJTOREDUXSTATE':
            return [
                ...state,
                action.data
            ]
        default:
            return state
    }
}

export default addimageobjecttoreduxstateReducer