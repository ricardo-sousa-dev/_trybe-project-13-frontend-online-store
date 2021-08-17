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
    const renderList = currentProducts
      .map((product) => (

        <li className={ product.title } key={ product.id }>

          <button
            id={ product.id }
            className="buttonRemoveFromCart"
            type="submit"
            onClick={ () => this.handleClick(product.id, 'X') }
          >
            X
          </button>

          <img
            className="imgProductCart"
            src={ product.thumbnail }
            alt={ product.title }
          />

          <p data-testid="shopping-cart-product-name">{product.title}</p>

          <button
            id={ product.id }
            className="buttonDecreaseQuantity"
            data-testid="product-decrease-quantity"
            type="submit"
            onClick={ () => this.handleClick(product.id, '-') }
          >
            -
          </button>

          <p data-testid="shopping-cart-product-quantity">{product.quantity}</p>

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
            {product.price}
          </p>

        </li>

      ));
    this.setState({ emptyCart: false, renderList });
  }

  handleClick = (id, action) => {
    const currentProducts = JSON.parse(localStorage.getItem('cartProducts'));
    const index = currentProducts
      .indexOf(currentProducts.find((product) => product.id === id));

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
  }

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

        <Link to="/">
          <i className="fas fa-undo" />
        </Link>

        <main>
          <br />
          <ButtonCart />
          <h2>Carrinho de Compras</h2>
        </main>

        <div className="productList">

          <ul className="listProductsCart">

            {renderList}

          </ul>

          <Link to="/checkout" data-testid="checkout-products">
            Finalizar compra
          </Link>

        </div>

      </div>

    );
  }
}

export default Cart;
