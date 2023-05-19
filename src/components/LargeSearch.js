import React from 'react';

export function LargeSearch(props) {
    return (
        <div className="lg-search">
            <label className="search-key" for="search-id">Search: </label>
            <input id="search-id" className="search-engine" type="search" name="search" />
        </div>
    )
}