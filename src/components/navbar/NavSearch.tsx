import React from 'react'

function NavSearch() {
  return (
    <div className='nav-search'>
        <form className="form-inline">
          <input
            className="search-bar"
            type="search"
            placeholder="Search for questions, courses & reactions"
            aria-label="Search"
          />
        </form>

    </div>
  )
}

export default NavSearch