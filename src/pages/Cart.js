import React from 'react';
import ButtonCart from '../components/ButtonCart';
import CartEmpt from '../components/CartEmpt';

class Home extends React.Component {
  // constructor(props) {
  //   super(props);
  // this.state = {
  //   itensCart: 0,
  // };
  // }

  render() {
    return (
      <div className="cart">
        <main>
          <i className="fas fa-undo" />
          <ButtonCart />
          <h1>Carrinho de Compras</h1>
        </main>
        <div className="">
          <CartEmpt />
        </div>
      </div>
    );
  }
}

export default Home;
