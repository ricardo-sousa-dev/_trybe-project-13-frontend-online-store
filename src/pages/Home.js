import React from 'react';
import SearchBar from '../components/SearchBar';
import MsgSearch from '../components/MsgSearch';
import ButtonCart from '../components/ButtonCart';
import CategoriesList from '../components/CategoriesList';

class Home extends React.Component {
  render() {
    return (
      <body>
        <main>
          <div className="searchBar">
            <SearchBar />
            <ButtonCart />
          </div>
          <MsgSearch />
        </main>
        <aside>
          <CategoriesList />
        </aside>
      </body>
    );
  }
}

export default Home;
