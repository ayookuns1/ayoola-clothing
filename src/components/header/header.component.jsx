import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.scss";
import crownSvg from "../../assets/crown.svg";

const Header = () => (
  <div className="header">
    <Link className="logo-container" to="/">
      <img src={crownSvg} className="logo" alt="Crown Logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
    </div>
  </div>
);

export default Header;
