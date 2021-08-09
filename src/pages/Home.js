import React from 'react';
import SearchBar from '../components/SearchBar';
import MsgSearch from '../components/MsgSearch';

class Home extends React.Component {
  render() {
    return (
      <main>
        <SearchBar />
        <MsgSearch />
      </main>
    );
  }
}

export default Home;
