import React from "react";
import "../styles.css";

const Filter = ({ setFilterTitle, setFilterRating }) => {
  return (
    <div className="filter-wrapper" style={{ textAlign: "center" }}>
      <div>
        <label htmlFor="search-by-title">Search By Title </label>
        <input
          type="text"
          id="search-by-title"
          onChange={(e) => setFilterTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="search-by-rating">Search By Rating </label>
        <input
          type="number"
          id="search-by-rating"
          min={0}
          max={10}
          onChange={(e) => setFilterRating(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Filter;
