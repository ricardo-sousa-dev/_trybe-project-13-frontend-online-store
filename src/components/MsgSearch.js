import React from 'react';

class MsgSearch extends React.Component {
  render() {
    return (
      <p className="initialMessage" data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </p>
    );
  }
}

export default MsgSearch;
