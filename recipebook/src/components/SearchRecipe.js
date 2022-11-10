import React from 'react'

function SearchRecipe({isLoading, searchKey, setSearchKey, handleSubmit,loadFavourite}) {
  return (
    <form onSubmit = {handleSubmit}>
        <input
            value = {searchKey}
            className = "form-input"
            placeholder = "Search Recipe"
            name = "searchKey"
            disabled = {isLoading}
            onChange = { e => setSearchKey(e.target.value)}
        />
        <input 
            disabled = {isLoading}
            type = "submit"
            className ="form-input-btn"
            value = "Search"
        />
    </form>
  )
}

export default SearchRecipe