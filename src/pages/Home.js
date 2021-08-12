import React from 'react';
import SearchBar from './SearchBar';
import MsgSearch from '../components/MsgSearch';
import ButtonCart from '../components/ButtonCart';
import CategoriesList from '../components/CategoriesList';
import ProductList from './ProductList';
import * as api from '../services/api';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
  }

  fetchProducts = async (query, categoryId) => {
    const getProducts = await api.getProductsFromCategoryAndQuery(categoryId, query);
    this.setState({
      products: [...getProducts.results],
    });
  }

  render() {
    const { products } = this.state;

    return (
      <div className="home">
        <main className="searchBar">
          <SearchBar onClick={ this.fetchProducts } />
          <ButtonCart />
        </main>
        <aside>
          <CategoriesList onClick={ this.fetchProducts } />
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
