import React from 'react';

export function SearchBox(props) {
    return (
        <div className="search-box">
            <label for="search-id">Search: </label>
            <input id="search-id" className="search-engine" type="search" name="search" />
        </div>
    )
}