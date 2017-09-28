import { connect } from 'react-redux'
import ProductListView from '../components/ProductListView'
import { addMyProduct } from '../actions/index';

const mapStateToProps = (state) => ({
    products: state.products
})

const mapDispatchToProps = {
    onClick: addMyProduct
}

const VisibleProductList = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductListView)

export default VisibleProductList