import React, { useState } from 'react';
import "./Header.css";

const Header = (props) => {
  const [enteredSearch, setSearch] = useState("");

  const doSearching = (event) => {
    setSearch(event.target.value);
  };

  const submitSearch = (event) => {
    event.preventDefault();
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=8f781d70654b5a6f2fa69770d1d115a3&query=${enteredSearch}`
    )
      .then((response) => response.json())
      .then((data) => props.onSearch(data));

    setSearch("");
  };

  return (
    <header>
      <div id="logo">
        <img src={"https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"} alt="" />
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
