import React from 'react';
import SearchBar from './SearchBar';
import MsgSearch from '../components/MsgSearch';
import ButtonCart from '../components/ButtonCart';
import CategoriesList from '../components/CategoriesList';
import ProductList from './ProductList';
import * as API from '../services/api';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
  }

  fetchProducts = async (query, categoryId = '') => {
    const getProducts = await API.getProductsFromCategoryAndQuery(
      categoryId,
      query,
    );
    this.setState({
      products: [...getProducts.results],
    });
  };

  render() {
    const { products } = this.state;

    return (
      <div className="home">
        <main>
          <section className="searchBar">
            <SearchBar onClick={ this.fetchProducts } />
            <ButtonCart />
          </section>
        </main>

        <aside>
          <CategoriesList />
        </aside>

        <div className="resultSearch">
          <MsgSearch />
          <ProductList products={ products } />
        </div>
      </div>
    );
  }
}

export default Home;
