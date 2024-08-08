import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Search = () => {
    return (
        <div className='search'>
            <div className='searchIcon'>
            <FontAwesomeIcon icon={faSearch}/>
            </div>
            <input type="search" placeholder='Search'/>
        </div>
    );
}

export default Search;
