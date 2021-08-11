import React from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';

class CategoriesList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    const { getCategories } = api;

    getCategories().then((categorie) => this.setState({ categories: categorie }));
  }

  renderProducts =(id) => {
    const { onClick } = this.props;
    onClick(undefined, id);
  }

  renderProductsWithKeyboard = (event, id) => {
    const { onClick } = this.props;
    if (event.keyCode === 13) {
      onClick(undefined, id);
    }
  }

  render() {
    const { categories } = this.state;
    return (
      <ul className="categories">
        { categories.map((categorie) => (
          <div
            key={ categorie.id }
            onClick={ () => this.renderProducts(categorie.id) }
            onKeyDown={ (event) => this.renderProductsWithKeyboard(event, categorie.id) }
            data-testid="category"
          >
            { categorie.name }
          </div>
        ))}
      </ul>
    );
  }
}

CategoriesList.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default CategoriesList;
