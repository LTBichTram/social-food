import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import Search from "./Search";

const Header = () => {
  return (
    <div className="header bg-light">
      <nav
        className="navbar navbar-expand-lg navbar-light 
            bg-light justify-content-between align-middle"
      >
        <Link to="/" className="logo">
          <h1
            className="navbar-brand text-uppercase p-0 m-0"
            onClick={() => window.scrollTo({ top: 0 })}
          >
            <div className="header-group">
              <img
                src="https://raw.githubusercontent.com/LTBichTram/social-food/main/frontend/src/assets/images/logoS.png"
                alt=""
                className="logo-img"
              />
              <h3 className="text-uppercase text-center mb-4"></h3>
            </div>
          </h1>
        </Link>

        <Search />

        <Menu />
      </nav>
    </div>
  );
};

export default Header;
