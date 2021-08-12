import React from 'react';

class CartEmpt extends React.Component {
  render() {
    return (
      <div className="cartEmpty">
        <i className="fas fa-box-open" />
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      </div>
    );
  }
}

export default CartEmpt;
