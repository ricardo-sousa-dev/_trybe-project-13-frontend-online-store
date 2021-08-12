import React from 'react';
import PropTypes from 'prop-types';

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
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { onClick } = this.props;
    const { query } = this.state;
    onClick(query);
  }

  render() {
    return (
      <div className="searchBar">
        <input data-testid="query-input" type="text" onChange={ this.handleChange } />
        <button
          type="submit"
          data-testid="query-button"
          onClick={ this.handleSubmit }
        >
          Procurar
        </button>
      </div>

    );
  }
}

SearchBar.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default SearchBar;
