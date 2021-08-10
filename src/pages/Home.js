import React from 'react';
import SearchBar from '../components/SearchBar';
import MsgSearch from '../components/MsgSearch';
import ButtonCart from '../components/ButtonCart';

class Home extends React.Component {
  render() {
    return (
      <main>
        <div className="searchBar">
          <SearchBar />
          <ButtonCart />
        </div>
        <SearchBar />
        <MsgSearch />
      </main>
    );
  }
}

export default Home;
