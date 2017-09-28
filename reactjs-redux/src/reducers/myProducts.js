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

        default:
            return state
    }
}

export default products