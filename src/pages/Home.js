import React from 'react';
import SearchBar from './SearchBar';
import ProductList from './ProductList';
import CategoriesList from '../components/CategoriesList';
import * as api from '../services/api';
import MsgSearch from '../components/MsgSearch';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      equipe: true,
    };
  }

  fetchProducts = async (query, categoryId) => {
    const getProducts = await api.getProductsFromCategoryAndQuery(
      categoryId,
      query,
    );
    this.setState({
      products: [...getProducts.results],
      equipe: false,
    });
  };

  render() {
    const { products, equipe } = this.state;
    if (equipe) {
      return (
        <div className="home">
          <main className="searchBar">
            <SearchBar onClick={ this.fetchProducts } />
          </main>
          <div className="resultSearch">
            <CategoriesList onClick={ this.fetchProducts } />
            <MsgSearch />
          </div>
        </div>
      );
    }

    return (
      <div className="home">
        <main className="searchBar">
          <SearchBar onClick={ this.fetchProducts } />
        </main>
        <div className="resultSearch">
          <CategoriesList onClick={ this.fetchProducts } />
          <ProductList products={ products } />
        </div>
      </div>
    );
  }
}

export default Home;
