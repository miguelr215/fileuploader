import React from 'react';
import './SearchBar.css';
import SearchBox from '../SearchBox/SearchBox.js';
import FilterOptions from '../FilterOptions/FilterOptions.js';

class SearchBar extends React.Component {
    render(){
        return(
            <div className='SearchBar'>
                <div className='SearchBar__heading'>
                    <h1>File Uploader</h1>
                </div>
                <div className="SearchBar__controls">
                    <SearchBox />
                    <FilterOptions />
                </div>
            </div>
        );
    }
}

export default SearchBar;