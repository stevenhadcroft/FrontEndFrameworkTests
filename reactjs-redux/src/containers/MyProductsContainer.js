import {connect} from 'react-redux'
import MyProductsView from '../components/MyProductsView'
import {removeMyProduct} from '../actions/index';

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