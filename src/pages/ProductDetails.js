import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ButtonCart from '../components/ButtonCart';
import logo from '../logo-trybe.jpeg';

// tela com exibição detalhada de um produto

class ProductDetails extends Component {
  addToLocalStorage = () => {
    // const { product: { id, title, price, thumbnail } } = this.props;
    const {
      location: { state },
    } = this.props;
    const { title, price, thumbnail } = state;

    const localStorageProducts = JSON.parse(localStorage.getItem('cartProducts')) || [];

    if (!localStorageProducts) {
      const quantity = 1;
      const productInfo = { title, price, thumbnail, quantity };

      localStorageProducts.push(productInfo);

      localStorage.setItem('cartProducts', '');
      localStorage.setItem(
        'cartProducts',
        JSON.stringify(localStorageProducts),
      );
    } else {
      const findProduct = localStorageProducts.find(
        (product) => product.title === title,
      );

      if (!findProduct) {
        const quantity = 1;
        const productInfo = { title, price, thumbnail, quantity };

        localStorageProducts.push(productInfo);

        localStorage.setItem('cartProducts', '');
        localStorage.setItem(
          'cartProducts',
          JSON.stringify(localStorageProducts),
        );
      } else {
        findProduct.quantity += 1;

        localStorage.setItem('cartProducts', '');
        localStorage.setItem(
          'cartProducts',
          JSON.stringify(localStorageProducts),
        );
      }
    }
  };

  render() {
    const {
      location: { state },
    } = this.props;
    const { title, price, thumbnail } = state;

    return (
      <div className="productDetail">
        <div className="searchBar">
          <div className="logo">
            <img src={ logo } alt="logo-trybe" />
            <div className="nameLogo">
              <h1>mercado</h1>
              <h1>trybe</h1>
            </div>
          </div>
          <h1>Detalhes do Produto</h1>
          <ButtonCart />
        </div>
        <div className="resultDetail">
          <div className="resultDetailTopo">
            <div className="linkRota">
              <Link className="linkRota" to="/">Início</Link>
            </div>
            <h1 data-testid="product-detail-name">{title}</h1>
          </div>
          <div className="productCardDetail">
            <img className="productCardThumbnailDetail" src={ thumbnail } alt={ title } />
            <p className="productCardPriceDetail">
              R$
              {' '}
              {price.toFixed(2)}
            </p>
            <button
              className="productCardButton"
              data-testid="product-detail-add-to-cart"
              type="submit"
              onClick={ this.addToLocalStorage }
            >
              Adicionar ao carrinho
            </button>
          </div>
        </div>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.arrayOf(Object).isRequired,
};

export default ProductDetails;
