import React from 'react';
import * as api from '../services/api';
import SearchBar from './SearchBar';

class ProductList extends React.Component {
  constructor() {
    super();

    this.state = {
      searchInput: [],
    };
  }

  componentDidMount() {
    const { getProductsFromCategoryAndQuery } = api;

    getProductsFromCategoryAndQuery()
      .then((product) => this.setState({ searchInput: product }));
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }
  // const { products } = this.state;
  // const productsList = (
  //   <ul>
  //     {products.map((product) => (
  //       <li key={ product.id } data-testid="product">
  //         {product.name}
  //       </li>
  //     ))}
  //   </ul>
  // );

  render() {
    return (
      <SearchBar data-testid="query-input" onChange={ this.handleChange } />
    );
  }
}

export default ProductList;
