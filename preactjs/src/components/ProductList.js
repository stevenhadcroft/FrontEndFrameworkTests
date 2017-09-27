import { h, Component } from 'preact';

class ProductList extends Component {

    constructor(props) {
        super(props);
    }

    selectProduct(d, i){
        window.EventDispatcher.trigger('addToMyProduct', d);
    }

    render() {
        var listItems =  <div>
                {this.props.data.products.map( (d, i) =>
                    <li onClick={()=>this.selectProduct(d, i)} key={d+i}>
                        <img src={this.props.data.productBucket + d.url} alt={d.title}/>
                        <div>{d.title}</div>
                    </li>
                )}
            </div>

        return (
            <div className="product-container">
                <ul className="cell">
                    {listItems}
                </ul>
            </div>
        );
    }
}

export default ProductList;
