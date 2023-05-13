import React, { useState } from "react";
import "./BurgerMenu.scss";
import { AppButton } from "../AppButton/AppButton";

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div
        className={`burger-menu ${isOpen ? "open" : ""}`}
        onClick={handleClick}
      >
        <div className="line" />
        <div className="line" />
        <div className="line" />
      </div>

      <nav className={`menu ${isOpen ? "open" : ""}`}>
        <div className="buttons">
          <AppButton text=""/>
          <AppButton text=""/>
        </div>
        <ul>
          <li>
            <a href="#">Главная</a>
          </li>
          <li>
            <a href="#">О компании</a>
          </li>
          <li>
            <a href="#">Контакты</a>
          </li>
        </ul>
      </nav>
    </>
  );
};
