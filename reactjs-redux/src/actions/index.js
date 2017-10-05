
export const addProduct = (product) => ({
    type: 'ADD_PRODUCT',
    product: product,
})

export const addMyProduct = (obj) => ({
    type: 'ADD_MY_PRODUCT',
    title: obj.title,
    url: obj.url
})

export const removeMyProduct = (product) => ({
    type: 'REMOVE_MY_PRODUCT',
    product: product,
})