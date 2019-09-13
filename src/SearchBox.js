import React from 'react'

const SearchBox = ({onSearch}) => {
    return (
        <div className="tc pa2">
            <input className="pa3 ba" name="searchField" type="search" placeholder="Search" onChange={onSearch}/>
        </div>
    )
}

export default SearchBox