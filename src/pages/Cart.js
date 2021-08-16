import React from 'react';
import { Link } from 'react-router-dom';
import ButtonCart from '../components/ButtonCart';
import CartEmpt from '../components/CartEmpt';

class Cart extends React.Component {
  // constructor(props) {
  //   super(props);

  //   // this.state = {
  //   //   forceRender: false,
  //   // };
  //   this.handleChange = this.handleChange.bind(this);
  // }

  // handleChange(e) {
  //   if (e.target.className === 'buttonRemoveToCart') {
  //     // deleteProduct = (e) => {
  //     const currentProducts = JSON.parse(localStorage.getItem('cartProducts'));
  //     const updatedProducts = currentProducts.filter(
  //       (product) => product.title !== e.target.id,
  //     );
  //     e.target.parentNode.remove();
  //     localStorage.setItem('cartProducts', JSON.stringify(updatedProducts));
  //     // this.setState((prevState) => ({ forceRender: !prevState.forceRender }));
  //     // };
  //   }

  //   if (e.target.className === 'buttonIncreaseQuantity') {
  //     // increaseQuantity = e => {
  //     const currentProducts = JSON.parse(localStorage.getItem('cartProducts'));
  //     const indexItemIncrease = currentProducts.indexOf(
  //       currentProducts.find((product) => product.title === e.target.id),
  //     );
  //     currentProducts[indexItemIncrease].quantity += 1;
  //     localStorage.setItem('cartProducts', '');
  //     localStorage.setItem('cartProducts', JSON.stringify(currentProducts));
  //     // this.setState((prevState) => ({ forceRender: !prevState.forceRender }));
  //     // };
  //   }
  //   if (e.target.className === 'buttonDecreaseQuantity') {
  //     // decreaseQuantity = e => {
  //     const currentProducts = JSON.parse(localStorage.getItem('cartProducts'));

  //     const indexItemDecrease = currentProducts.indexOf(
  //       currentProducts.find((product) => product.title === e.target.id),
  //     );
  //     if (currentProducts[indexItemDecrease].quantity > 1) {
  //       currentProducts[indexItemDecrease].quantity -= 1;
  //       localStorage.setItem('cartProducts', '');
  //       localStorage.setItem('cartProducts', JSON.stringify(currentProducts));
  //       // this.setState((prevState) => ({ forceRender: !prevState.forceRender }));
  //     } else {
  //       const updatedProducts = currentProducts.filter(
  //         (product) => product.title !== e.target.id,
  //       );
  //       e.target.parentNode.remove();
  //       localStorage.setItem('cartProducts', JSON.stringify(updatedProducts));
  // this.setState((prevState) => ({ forceRender: !prevState.forceRender }));
  // }
  // };
  // }
  // this.setState((prevState) => ({ forceRender: !prevState.forceRender }));
  // }

  render() {
    const localStorageProducts = JSON.parse(
      localStorage.getItem('cartProducts'),
    );
    if (!localStorageProducts || localStorageProducts === []) {
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
            {localStorageProducts.map((product) => (
              <li className={ product.title } key={ product.title }>
                <button
                  id={ product.title }
                  className="buttonRemoveToCart"
                  type="submit"
                  onClick={ this.handleChange }
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
                  onClick={ this.handleChange }
                >
                  -
                </button>
                <p
                  data-testid="shopping-cart-product-quantity"
                  // value={ quantity }
                  // onChange={ this.handleChange }
                >
                  {product.quantity}
                </p>
                <button
                  id={ product.title }
                  className="buttonIncreaseQuantity"
                  data-testid="product-increase-quantity"
                  type="submit"
                  onClick={ this.handleChange }
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
