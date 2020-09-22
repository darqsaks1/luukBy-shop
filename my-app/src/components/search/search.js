import React from 'react';
import logoLuukBy from '../../assets/app-images/logo-luukBY.jpg'
const Search = () => {
    return (
        <div className="search-container">
            <div className="image-logo">
                <img src={logoLuukBy} alt='logo' />
            </div>
            <div class="wrap">
                <div class="search">
                    <input type="text" class="searchTerm" placeholder="What are you looking for?" />
                    <button type="submit" class="searchButton">
                        <i class="fa fa-search"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Search;
