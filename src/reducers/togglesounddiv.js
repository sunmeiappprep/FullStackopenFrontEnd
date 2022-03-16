const togglesounddivReducer = (state = true,action) => {
    switch (action.type) {
        case 'TOGGLESOUNDDIV':
            return !state
        default:
            return state
    }
}

export default togglesounddivReducer

