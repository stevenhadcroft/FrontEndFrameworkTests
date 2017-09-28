import { combineReducers } from 'redux'
import products from './products'
import myProducts from './myProducts'

const all = combineReducers({
    products,
    myProducts,
})

export default all