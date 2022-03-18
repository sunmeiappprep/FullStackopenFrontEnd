const togglesounddivReducer = (state = {bool:true},action) => {
    switch (action.type) {
        case 'TOGGLESOUNDDIV':
            // console.log(...state)
            return {
                ...state,
                bool: !state.bool
            }
        case 'SETPLAYERHEIGHT':
            return {
                ...state,
                height: action.height
                // bool: !state.bool
            }
        default:
            return state
    }
}

export default togglesounddivReducer

