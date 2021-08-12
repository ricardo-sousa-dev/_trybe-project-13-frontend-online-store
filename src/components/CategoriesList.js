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

  render() {
    const { categories } = this.state;
    return (
      <ul className="categories">
        { categories.map((categorie) => (
          <li
            key={ categorie.id }
            onClick={ () => this.renderProducts(categorie.id) }
            aria-hidden="true" // Com base em: https://stackoverflow.com/questions/54274473/how-to-fix-static-html-elements-with-event-handlers-require-a-role
            data-testid="category"
          >
            { categorie.name }
          </li>
        ))}
      </ul>
    );
  }
}

CategoriesList.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default CategoriesList;
