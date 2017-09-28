
export const addProduct = () => ({
    type: 'ADD_PRODUCT'
})

export const addMyProduct = (e) => ({
    type: 'ADD_MY_PRODUCT',
    title: e.title,
    url: e.url
})

