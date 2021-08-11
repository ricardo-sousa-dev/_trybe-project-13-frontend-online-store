import React from 'react';
import * as api from '../services/api';

class CategoriesList extends React.Component {
  // Declarar categorias em um estado como um array inicialmente vazio; Fazer requisição da API com a função das categorias quando a página for montada (ComponentWillMount); Atualizar o estado de categorias com o resultado dessa requisição; Colocar esse resultado em uma lista
  constructor() {
    super();

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    const { getCategories } = api;

    getCategories().then((categorie) => this.setState({ categories: categorie }));
  }

  render() {
    const { categories } = this.state;
    return (
      <ul className="categories">
        { categories.map((categorie) => (
          <li key={ categorie.id } data-testid="category">
            { categorie.name }
          </li>
        ))}
      </ul>
    );
  }
}

export default CategoriesList;
