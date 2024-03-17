// SearchBar.js
import React from 'react';
import './SearchBar.css';

const SearchBar = ({ searchTerm, onSearch }) => {
    return (
        <input 
            className="search-bar"
            type="text" 
            placeholder="Search by description..." 
            value={searchTerm} 
            onChange={(e) => onSearch(e.target.value)} 
        />
    );
};

export default SearchBar;
