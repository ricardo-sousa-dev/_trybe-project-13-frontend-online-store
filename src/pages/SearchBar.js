import React from 'react';
import PropTypes from 'prop-types';
import ButtonCart from '../components/ButtonCart';
import logo from '../logo-trybe.jpeg';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };
  }

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({
      query: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { onClick } = this.props;
    const { query } = this.state;
    onClick(query);
  };

  render() {
    return (
      <div className="searchBar">
        <div className="logo">
          <img src={ logo } alt="logo-trybe" />
          <div className="nameLogo">
            <h1>mercado</h1>
            <h1>trybe</h1>
          </div>
        </div>
        <form action="">
          <input
            data-testid="query-input"
            type="text"
            onChange={ this.handleChange }
            placeholder="Buscar produtos, marcas e muito mais..."
          />
          <button
            className="searchButton"
            type="submit"
            data-testid="query-button"
            onClick={ this.handleSubmit }
          >
            <i className="fas fa-search" />
            <h3>Procurar</h3>
          </button>
        </form>
        <ButtonCart />
      </div>
    );
  }
}

SearchBar.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default SearchBar;
