import React from "react";
import "./header.scss";

interface HeaderProps {
  handleMenu: () => void;
}

const HeaderComponent = ({ handleMenu }: HeaderProps) => {
  return (
    <header className="header__container">
      <nav className="navbar__small" onClick={handleMenu}>
        <span className="navbar__icon"></span>
        <span className="navbar__icon"></span>
        <span className="navbar__icon"></span>
      </nav>
      <a href="" className="header__logo">
        My ToDo
      </a>
    </header>
  );
};

export default HeaderComponent;
