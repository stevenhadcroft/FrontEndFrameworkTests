
export const addProduct = () => ({
    type: 'ADD_PRODUCT'
})

export const addMyProduct = (e) => ({
    type: 'ADD_MY_PRODUCT',
    title: e.title,
    url: e.url
})

export const removeMyProduct = (e) => ({
    type: 'REMOVE_MY_PRODUCT',
    product: e,
})