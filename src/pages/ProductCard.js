import React from 'react';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  addCart() {
    console.log(this.props);
  }

  render() {
    const { product: { title, price, thumbnail } } = this.props;

    return (
      <div className="productCard" data-testid="product">
        <p className="productCardTitle">{title}</p>
        <img className="productCardThumbnail" src={ thumbnail } alt={ title } />
        <p className="productCardPrice">
          R$
          {price}
        </p>
        <button
          className="productCardButton"
          type="submit"
          onClick={ this.addCart }
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    price: PropTypes.number,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
  }).isRequired,
};

export default ProductCard;
