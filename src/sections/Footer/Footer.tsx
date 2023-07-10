import { AppNav } from "../../components/AppNav/AppNav";
import { AppContainer } from "../SectionContainer/SectionContainer";
import { FooterLink } from "./FooterLink/FooterLink";
import "./Footer.scss";
import logo from "../../img/logo.png";
import facebook from "../../img/facebook.svg";
import twitter from "../../img/twitter.svg";
import instagram from "../../img/instagram.svg";
import linkedin from "../../img/linkedin.svg";

export const Footer = () => {
  return (
    <AppContainer>
      <section className="footer">
        <img className="footer__logo" src={logo} alt="no logo" />
        <AppNav
          classNameNav="app-nav__unique"
          classNameLink="app-nav-link__unique"
        />
        <div className="footer__social">
          <FooterLink href="#" src={facebook} />
          <FooterLink href="#" src={twitter} />
          <FooterLink href="#" src={instagram} />
          <FooterLink href="#" src={linkedin} />
        </div>
      </section>
    </AppContainer>
  );
};
