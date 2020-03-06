import React from 'react';
import Commerce from '@chec/commerce.js';
import Product from './Product';

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: null,
    }
  }

  componentDidMount() {
    const commerce = new Commerce('pk_test_17875346b35b2e7dff29fa7caf6036b477496d41c283b');

    commerce.products.list()
      .then(res => {
        this.setState({products: res.data})
      })
      .catch(err => console.log(err))
  }
  
  render() {

    const { products } = this.state;
    return (
      <div>
        <h1 className="products">Products list</h1>
        {products 
          ? products.map(product => (
              <Product 
                key={product.id} 
                name={product.name} 
                image={product.media.source} 
                price={product.price.formatted_with_symbol} 
                description={product.description.replace(/(<([^>]+)>)/ig,"")} 
              />
            ))
          : 'Porducts not available yet'}
      </div>

    );
  }
}

export default Products;