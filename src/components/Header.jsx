import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  // Header hissesidi
  return (
    <div className="header-container">
      <Link to="/" className="mustsee">
        {" "}
        <h2 className="header-text">MUSTSEE</h2>
      </Link>
    </div>
  );
};

export default Header;
