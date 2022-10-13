import React from "react";

function Header() {
  return (
    <header id="header--container">
      <h1 className="header--item">Weather App</h1>
      <a className="header--item" href="/?city=New York City"> New York City</a>
      <a className="header--item" href="/?city=Los Angeles"> Los Angeles</a>
      <a className="header--item" href="/?city=Paris"> Paris</a>
      <a className="header--item" href="/?city=Tokyo"> Tokyo</a>
    </header>
  );
}

export default Header;
