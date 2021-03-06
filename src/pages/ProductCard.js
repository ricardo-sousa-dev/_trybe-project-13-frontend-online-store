import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  addToLocalStorage = () => {
    const {
      product: { id, title, price, thumbnail },
    } = this.props;

    const localStorageProducts = JSON.parse(localStorage.getItem('cartProducts')) || [];

    if (!localStorageProducts) {
      const quantity = 1;
      const productInfo = { id, title, price, thumbnail, quantity };

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
        const productInfo = { id, title, price, thumbnail, quantity };

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
    const { product } = this.props;
    const { id, title, price, thumbnail } = product;

    return (
      <div className="productCard" data-testid="product">
        <p className="productCardTitle">{title}</p>

        <img className="productCardThumbnail" src={ thumbnail } alt={ title } />

        <div className="divDetail">
          <p className="productCardPrice">
            R$
            {' '}
            {price.toFixed(2)}
          </p>
          <Link
            className="linkDetail"
            data-testid="product-detail-link"
            to={ { pathname: `/product-details/${id}`, state: product } }
          >
            Detalhes
          </Link>
        </div>
        <button
          className="productCardButton"
          data-testid="product-add-to-cart"
          type="submit"
          onClick={ this.addToLocalStorage }
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    price: PropTypes.number,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
  }).isRequired,
};

export default ProductCard;
