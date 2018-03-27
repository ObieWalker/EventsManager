import React from 'react';

const Search = () => (
  <div >
    <form className='col s12 m6' style={{ width: '40%', float: 'right' }}>
      <div className="input-field search-field">
        <input id="search"
          type="search"
          required placeholder="Search for centers" />
        <label className="label-icon" htmlFor="search">
          <i className="material-icons">search</i>
        </label>
        <i className="material-icons">close</i>
      </div>
    </form>
  </div>
);
export default Search;
