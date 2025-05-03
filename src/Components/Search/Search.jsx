import React from "react";
import "./Search.css";

const Search = () => {
  return (
    <div>
      <div className="searchContainer">
        <div className="searchboxContainer">
          <input className="searchbox" placeholder="Search..." />
          <i className="fas fa-search"></i>
        </div>
      </div>
    </div>
  );
};

export default Search;
