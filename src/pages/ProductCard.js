import React from 'react';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  addToLocalStorage = () => {
    const { product: { id, title, price, thumbnail } } = this.props;

    const localStorageProducts = JSON.parse(localStorage.getItem('cartProducts')) || [];
    console.log(localStorageProducts);

    if (!localStorageProducts) {
      const quantity = 1;
      const productInfo = { id, title, price, thumbnail, quantity };

      localStorageProducts.push(productInfo);

      localStorage.setItem('cartProducts', '');
      localStorage.setItem('cartProducts', JSON.stringify(localStorageProducts));
    } else {
      const findProduct = localStorageProducts.find((product) => product.title === title);

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
    const { product: { title, price, thumbnail } } = this.props;

    return (
      <div className="productCard" data-testid="product">
        <p className="productCardTitle">{ title }</p>
        <img className="productCardThumbnail" src={ thumbnail } alt={ title } />
        <p className="productCardPrice">
          R$
          {price}
        </p>
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
