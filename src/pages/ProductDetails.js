import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ButtonCart from '../components/ButtonCart';
import '../App.css';

// tela com exibição detalhada de um produto

class ProductDetails extends Component {
  addToLocalStorage = () => {
    // const { product: { id, title, price, thumbnail } } = this.props;
    const { location: { state } } = this.props;
    const { id, title, price, thumbnail } = state;

    const localStorageProducts = JSON.parse(localStorage.getItem('cartProducts')) || [];

    if (!localStorageProducts) {
      const quantity = 1;
      const productInfo = { id, title, price, thumbnail, quantity };

      localStorageProducts.push(productInfo);

      localStorage.setItem('cartProducts', '');
      localStorage.setItem('cartProducts', JSON.stringify(localStorageProducts));
    } else {
      const findProduct = localStorageProducts.find((product) => product.id === id);

      if (!findProduct) {
        const quantity = 1;
        const productInfo = { id, title, price, thumbnail, quantity };

        localStorageProducts.push(productInfo);

        localStorage.setItem('cartProducts', '');
        localStorage.setItem('cartProducts', JSON.stringify(localStorageProducts));
      } else {
        findProduct.quantity += 1;

        localStorage.setItem('cartProducts', '');
        localStorage.setItem('cartProducts', JSON.stringify(localStorageProducts));
      }
    }
  };

  render() {
    const { location: { state } } = this.props;
    const { title, price, thumbnail } = state;

    return (

      <div>

        <Link to="/">Início</Link>
        <h1 data-testid="product-detail-name">{title}</h1>
        <h3 data-testid="product-details-price">{price}</h3>
        <img src={ thumbnail } alt={ title } />

        <ButtonCart />

        <button
          className="productCardButton"
          data-testid="product-detail-add-to-cart"
          type="submit"
          onClick={ this.addToLocalStorage }
        >
          Adicionar ao carrinho
        </button>

      </div>

    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.arrayOf(Object).isRequired,
};

export default ProductDetails;
