import React from 'react';
import './App.css';
import FilterableList from './FilterableList/FilterableList.js';
import SearchBar from './SearchBar/SearchBar.js';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchTerm: '',
      filterOption: 'All'
    };
  }

  updateSearchTerm = (term) => {
    this.setState({
      searchTerm: term
    })
  };

  updateFilterOption = (option) => {
    this.setState({
      filterOption: option
    })
  };

  render(){
    return (
      <div className='App'>
        <SearchBar 
          searchTerm={this.state.searchTerm}
          filterOption={this.state.filterOption}
          handleUpdate={this.updateSearchTerm}
          handleFilterChange={this.updateFilterOption}/>
        <FilterableList 
          files={this.props.files}
          searchTerm={this.state.searchTerm}
          filterOption={this.state.filterOption}/>
      </div>
    );
  }
}

export default App;
