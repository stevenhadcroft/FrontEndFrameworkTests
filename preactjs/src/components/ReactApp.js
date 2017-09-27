import { h, Component } from 'preact';
import EventDispatcher from './EventDispatcher.js';
import ProductList from './ProductList.js';
import MyProducts from "./MyProducts";


import '../css/reset.css';
import '../css/layout.css';
import '../css/style.css';
import '../data/data.js';



class ReactApp extends Component {

    constructor (props){
        super(props);

        window.EventDispatcher.on('addToMyProduct', (d) => this.onAddToMyProduct(d));
        window.EventDispatcher.on('addProduct', () => this.onAddProduct());

        window.data.myProducts = [];
        this.state = {
            data:window.data
        }
    }

    onAddToMyProduct(d){
        this.state.data.myProducts.push(d);
        this.setState(this.state)
    }

    onAddProduct(){
        this.state.data.products.unshift(this.state.data.products[0]);
        this.setState(this.state)
    }

    render() {
        return (
            <div className="App">
                <MyProducts data={this.state.data}/>
                <ProductList data={this.state.data}/>
            </div>
            );
        }
    }

export default ReactApp;

