import React from 'react';
import "./header.scss";

const HeaderComponent = ({handleMenu}) => {
  return (
    <header className='header__container'>
      <a href="" className='header__logo'>My ToDo</a>
      <nav className="menu__small" onClick={handleMenu}>
        <span className="menu__icon"></span>
        <span className="menu__icon"></span>
        <span className="menu__icon"></span>
      </nav>
    </header>
  )
}

export default HeaderComponent;