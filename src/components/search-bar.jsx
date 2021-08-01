import React from "react";

const SearchBar = () => {
    return (
        <div className="search">
            <div className="search-wrapper">
                <label htmlFor="">
                    <input className="input-search" type="text" placeholder=""/>
                    <button className="btn">Search</button>
                </label>
            </div>
        </div>
    );
}
        export default SearchBar;