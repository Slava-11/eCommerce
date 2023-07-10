import { AppButton } from "../../components/AppButton/AppButton";
import { AppNav } from "../../components/AppNav/AppNav";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import { AppContainer } from "../SectionContainer/SectionContainer";
import "./Header.scss";

import logo from "../../img/logo.png";

export const Header = () => {
  return (
    <AppContainer>
      <section className="header">
        <img className="header__logo" src={logo} alt="no logo" />
        <AppNav />
        <div className="header__buttons">
          <AppButton classNameButton="app-button__distinctive">
            Sign in
          </AppButton>
          <AppButton>Try Free</AppButton>
        </div>
        <BurgerMenu />
      </section>
    </AppContainer>
  );
};
