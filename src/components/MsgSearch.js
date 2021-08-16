import React from 'react';

class MsgSearch extends React.Component {
  render() {
    return (
      <div className="msgSearch">
        <p className="initialMessage" data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <h1>Equipe de desenvolvimento:</h1>
        <br />
        <div className="cardEquipe">
          <img
            src="https://ca.slack-edge.com/TMDDFEPFU-U01SSEYGDBQ-4e6c333e5449-512"
            className="thumbnailEquipe"
            alt="equipe"
          />
          <p className="cardEquipeTitle">Luiz Casimiro</p>
        </div>
        <div className="cardEquipe">
          <img
            src="https://ca.slack-edge.com/TMDDFEPFU-U020H1SFVA9-8dc514a25160-512"
            className="thumbnailEquipe"
            alt="equipe"
          />
          <p className="cardEquipeTitle">Ricardo Sousa</p>
        </div>
        <div className="cardEquipe">
          <img
            src="https://ca.slack-edge.com/TMDDFEPFU-U020H1PUN7P-66da5796cf23-512"
            className="thumbnailEquipe"
            alt="equipe"
          />
          <p className="cardEquipeTitle">Bruno Pinho</p>
        </div>
        <div className="cardEquipe">
          <img
            src="https://ca.slack-edge.com/TMDDFEPFU-U020YN4483T-d437586e7737-512"
            className="thumbnailEquipe"
            alt="equipe"
          />
          <p className="cardEquipeTitle">Marcelo Alessandro</p>
        </div>
      </div>
    );
  }
}

export default MsgSearch;
