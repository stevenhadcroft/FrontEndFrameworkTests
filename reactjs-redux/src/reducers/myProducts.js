const products = (state = [], action) => {
    switch (action.type) {
        case 'ADD_MY_PRODUCT':
            return [
                ...state,
                {
                    title:action.title,
                    url:action.url
                }
            ]

        case 'REMOVE_MY_PRODUCT':
            console.log('REMOVE_MY_PRODUCT ', action.product)
            var index = state.indexOf(action.product);
            if (index !== -1){
                state.splice(index, 1);
            }
            return [...state]


        default:
            return state
    }
}

export default products