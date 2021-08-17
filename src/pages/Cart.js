import React from 'react';
import { Link } from 'react-router-dom';
import ButtonCart from '../components/ButtonCart';
import CartEmpt from '../components/CartEmpt';

class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      emptyCart: true,
      renderList: [],
    };
  }

  componentDidMount() {
    this.renderCurrentProducts();
  }

  renderCurrentProducts = () => {
    if (!localStorage.cartProducts || localStorage.cartProducts === '[]') {
      this.setState({ emptyCart: true });
      return;
    }

    const currentProducts = JSON.parse(localStorage.getItem('cartProducts'));
    const renderList = currentProducts.map((product) => (
      <li className="liProductCart" key={ product.id }>
        <div className="containerDiv1">
          <div className="liProductCartDiv1">
            <button
              id={ product.id }
              className="buttonRemoveFromCart"
              type="submit"
              onClick={ () => this.handleClick(product.id, 'X') }
            >
              x
            </button>

            <img
              className="imgProductCart"
              src={ product.thumbnail }
              alt={ product.title }
            />

            <p data-testid="shopping-cart-product-name">{product.title}</p>
          </div>
        </div>
        <div className="containerDiv2">
          <div className="liProductCartDiv2">
            <button
              id={ product.id }
              className="buttonDecreaseQuantity"
              data-testid="product-decrease-quantity"
              type="submit"
              onClick={ () => this.handleClick(product.id, '-') }
            >
              -
            </button>

            <p className="quantityCart" data-testid="shopping-cart-product-quantity">
              {product.quantity}
            </p>

            <button
              id={ product.id }
              className="buttonIncreaseQuantity"
              data-testid="product-increase-quantity"
              type="submit"
              onClick={ () => this.handleClick(product.id, '+') }
            >
              +
            </button>

            <p>
              R$
              {' '}
              {product.price.toFixed(2)}
            </p>
          </div>
        </div>
      </li>
    ));
    this.setState({ emptyCart: false, renderList });
  };

  handleClick = (id, action) => {
    const currentProducts = JSON.parse(localStorage.getItem('cartProducts'));
    const index = currentProducts.indexOf(
      currentProducts.find((product) => product.id === id),
    );

    if (action === '+') {
      currentProducts[index].quantity += 1;
    }
    if (action === '-') {
      currentProducts[index].quantity -= 1;
    }
    if (action === 'X' || currentProducts[index].quantity <= 0) {
      currentProducts.splice(index, 1);
    }
    localStorage.setItem('cartProducts', JSON.stringify(currentProducts));
    this.renderCurrentProducts();
  };

  render() {
    const { emptyCart, renderList } = this.state;

    if (emptyCart === true) {
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
        {/* <Link to="/">
          <i className="fas fa-undo" />
        </Link> */}

        <main>
          <br />
          <ButtonCart />
          <h2>Carrinho de Compras</h2>
        </main>
        <Link className="linkRota" to="/">
          Início
        </Link>

        <div className="productListCart">
          <ul className="listProductsCart">{renderList}</ul>

          <Link
            to="/checkout"
            className="linkCheckout"
            data-testid="checkout-products"
          >
            Finalizar compra
          </Link>
        </div>
      </div>
    );
  }
}

export default Cart;
