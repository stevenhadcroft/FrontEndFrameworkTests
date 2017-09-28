const products = (state = [], action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            state.unshift(state[0]);
            return [...state];

        default:
            return state
    }
}

export default products