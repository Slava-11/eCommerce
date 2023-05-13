import "../../img/logo.png";
import "./Header.scss";
import { AppButton } from "../AppButton/AppButton";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";

export const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <img className="header__img" src="/src/img/logo.png" alt="no logo" />
        <BurgerMenu/>
        <nav className="header__navigation">
          <a className="header__navigation-button" href="#">
            About
          </a>
          <a className="header__navigation-button" href="#">
            Product
          </a>
          <a className="header__navigation-button" href="#">
            Service
          </a>
          <a className="header__navigation-button" href="#">
            Contact
          </a>
        </nav>
        <div className="header__buttons">
          <AppButton text='Sign in' textColor='var(--yellow)' bgColor='transparent' borderColor='var(--yellow)'/>
          <AppButton text='Try Free' margin='15px'/>
        </div>
      </div>
    </div>
  );
};
