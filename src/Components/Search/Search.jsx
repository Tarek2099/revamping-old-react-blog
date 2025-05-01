import React, { useState } from "react";
import "./Search.css";

const Search = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    // Add your search logic here
  };

  const toggleSearch = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <div className="searchContainer">
        <i className="fas fa-search" onClick={toggleSearch}></i>
        {isVisible && (
          <div className="searchboxContainer">
            <input
              className="searchbox"
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Search..."
            />
            <span className="searchHide" onClick={toggleSearch}>
              X
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
