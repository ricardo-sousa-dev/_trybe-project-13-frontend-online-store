import React from 'react';
import { Link } from 'react-router-dom';
import ButtonCart from '../components/ButtonCart';
import CartEmpt from '../components/CartEmpt';

class Cart extends React.Component {
  handleClick = (e) => {
    const currentProducts = JSON.parse(localStorage.getItem('cartProducts'));

    if (e.target.className === 'buttonRemoveFromCart') {
      const updatedProducts = currentProducts
        .filter((product) => product.title !== e.target.id);

      e.target.parentNode.remove();

      localStorage.setItem('cartProducts', JSON.stringify(updatedProducts));
    }

    if (e.target.className === 'buttonDecreaseQuantity') {
      const indexItemDecrease = currentProducts
        .indexOf(currentProducts.find((product) => product.title === e.target.id));

      if (currentProducts[indexItemDecrease].quantity > 1) {
        currentProducts[indexItemDecrease].quantity -= 1;

        localStorage.setItem('cartProducts', JSON.stringify(currentProducts));
      } else {
        const updatedProducts = currentProducts
          .filter((product) => product.title !== e.target.id);

        e.target.parentNode.remove();

        localStorage.setItem('cartProducts', JSON.stringify(updatedProducts));
      }
    }

    if (e.target.className === 'buttonIncreaseQuantity') {
      const indexItemIncrease = currentProducts
        .indexOf(currentProducts.find((product) => product.title === e.target.id));

      currentProducts[indexItemIncrease].quantity += 1;

      localStorage.setItem('cartProducts', JSON.stringify(currentProducts));
    }
  }

  render() {
    const currentProducts = JSON.parse(localStorage.getItem('cartProducts'));

    if (!currentProducts || currentProducts === []) {
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

            {currentProducts
              .map((product) => (

                <li className={ product.title } key={ product.title }>

                  <button
                    id={ product.title }
                    className="buttonRemoveFromCart"
                    type="submit"
                    onClick={ this.handleClick }
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
                    id={ product.title }
                    className="buttonDecreaseQuantity"
                    data-testid="product-decrease-quantity"
                    type="submit"
                    onClick={ this.handleClick }
                  >
                    -
                  </button>

                  <p
                    data-testid="shopping-cart-product-quantity"
                  >
                    {product.quantity}
                  </p>

                  <button
                    id={ product.title }
                    className="buttonIncreaseQuantity"
                    data-testid="product-increase-quantity"
                    type="submit"
                    onClick={ this.handleClick }
                  >
                    +
                  </button>

                  <p>
                    R$
                    {product.price}
                  </p>

                </li>
              ))}

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
