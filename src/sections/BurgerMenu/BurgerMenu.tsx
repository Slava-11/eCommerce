import { useState } from "react";
import "./BurgerMenu.scss";
import { AppNav } from "../../components/AppNav/AppNav";

type BurgerMenuProps = {
  classNameBurger?: string;
};

export const BurgerMenu = ({ classNameBurger }: BurgerMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle("scroll-lock");
  };

  return (
    <section className={`burger ${classNameBurger}`}>
      <div
        className={`burger-menu ${isOpen ? "open" : ""}`}
        onClick={handleClick}
      >
        <div className="line" />
        <div className="line" />
        <div className="line" />
      </div>

      <nav className={`menu ${isOpen ? "open" : ""}`}>
        <AppNav
          classNameNav="app-nav__unique"
          classNameLink="app-nav-link__unique"
        />
      </nav>
    </section>
  );
};
