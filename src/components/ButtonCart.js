import React from 'react';
import { Link } from 'react-router-dom';

class ButtonCart extends React.Component {
  render() {
    return (
      <div>
        <button className="buttonCart" type="button">
          <Link to="/cart" data-testid="shopping-cart-button">
            <i className="fas fa-shopping-cart" />
          </Link>
        </button>
      </div>
    );
  }
}

export default ButtonCart;
