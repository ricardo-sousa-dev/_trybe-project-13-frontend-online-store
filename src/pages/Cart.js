import React from 'react';
import { Link } from 'react-router-dom';
import ButtonCart from '../components/ButtonCart';
import CartEmpt from '../components/CartEmpt';

class Home extends React.Component {
  // constructor(props) {
  //   super(props);
  // this.state = {
  //   itensCart: 0,
  // };
  // }
  // comment

  render() {
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
        <CartEmpt />
      </div>
    );
  }
}

export default Home;
