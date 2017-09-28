import { connect } from 'react-redux'
import MyProductsView from '../components/MyProductsView'
import { addProduct } from '../actions/index';

const mapStateToProps = (state) => ({
    products: state.myProducts
})

const mapDispatchToProps = {
    onClick: addProduct
}

const VisibleMyProducts = connect(
    mapStateToProps,
    mapDispatchToProps
)(MyProductsView)

export default VisibleMyProducts