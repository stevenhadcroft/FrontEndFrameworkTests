const products = (state = [], action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            if (action.product){
                state.unshift(action.product);
            }
            return [...state];
            break;

        default:
            return state
    }
}

export default products

