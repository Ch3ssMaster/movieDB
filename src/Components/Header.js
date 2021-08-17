import React, { useState } from "react";
import "./Header.css";

const Header = (props) => {
  const [enteredSearch, setSearch] = useState("");

  const doSearching = (event) => {
    setSearch(event.target.value);
  };

  const submitSearch = (event) => {
    event.preventDefault();
    if (enteredSearch.trim().length > 2) {
      props.onSearch(enteredSearch);
      setSearch("");
    } else {
      props.onSearch(false);
    }
  };

  return (
    <header>
      <div id="logo">
        <img
          src={
            "https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
          }
          alt=""
        />
      </div>
      <form onSubmit={submitSearch}>
        <input
          onChange={doSearching}
          value={enteredSearch}
          type="text"
          name="search"
          id="search"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default Header;
