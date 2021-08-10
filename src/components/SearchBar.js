import React from 'react';

class SearchBar extends React.Component {
  // constructor (props){
  //   super(props);

  //   this.state {
  //     search: ''
  //   };
  // }

  render() {
    const { onChange } = this.props;
    return <input data-testid="query-input" type="text" name="searchInput" onChange={ onChange } />;
  }
}

export default SearchBar;
