import React from 'react';
import { Link } from 'react-router-dom';
import ButtonCart from '../components/ButtonCart';
import CartEmpt from '../components/CartEmpt';

class Home extends React.Component {
  render() {
    const localStorageProducts = JSON.parse(localStorage.getItem('cartProducts'));

    if (!localStorageProducts) {
      return (

        <div>

          <CartEmpt />

          <Link to="/">
            <i className="fas fa-undo" />
          </Link>

        </div>

      );
    }

    return (

      <div className="cart">

        <Link to="/">
          <i className="fas fa-undo" />
        </Link>

        <main>
          <br />
          <ButtonCart />
          <h2>Carrinho de Compras</h2>
        </main>

        <div className="productList">

          <ul>
            {localStorageProducts.map((product) => (
              <li data-testid="shopping-cart-product-name" key={ product.title }>
                { product.title }
              </li>
            ))}
          </ul>

          <ul>
            {localStorageProducts.map((product) => (
              <li data-testid="shopping-cart-product-quantity" key={ product.title }>
                { product.quantity }
              </li>
            ))}
          </ul>
          <Link to="/checkout" data-testid="checkout-products">Finalizar compra</Link>
        </div>
      </div>
    );
  }
}

export default Home;
