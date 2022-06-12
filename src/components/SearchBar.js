import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
  const inputDefault = "Search GitHub";
  return (
    <section className="SearchBar-section">
      <input type="text" defaultValue={inputDefault}></input>
    </section>
  );
};

export default SearchBar;
