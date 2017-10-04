import {connect} from 'react-redux'
import MyProductsView from '../components/MyProductsView'
import {addProduct, removeMyProduct} from '../actions/index';
import HTTP from '../utils/http'

const mapStateToProps = (state) => ({
    products: state.myProducts
})

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (product) => {
            dispatch(removeMyProduct(product));
        }
    }
}

// ...or
// const mapDispatchToProps = {
//     onClick: removeMyProduct,
// }

const MyProductsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MyProductsView)

export default MyProductsContainer