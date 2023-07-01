import { AppNav } from "../../components/AppNav/AppNav";
import { AppContainer } from "../SectionContainer/SectionContainer";
import { FooterLink } from "./FooterLink/FooterLink";
import './Footer.scss'

export const Footer = () => {
  return (
    <AppContainer>
      <section className="footer">
        <img className="footer__logo" src="src/img/logo.png" alt="no logo" />
        <AppNav classNameNav="app-nav__unique" classNameLink="app-nav-link__unique"/>
        <div className="footer__social">
          <FooterLink href="#" src="src/img/facebook.svg" />
          <FooterLink href="#" src="src/img/twitter.svg" />
          <FooterLink href="#" src="src/img/instagram.svg" />
          <FooterLink href="#" src="src/img/linkedin.svg" />
        </div>
      </section>
    </AppContainer>
  );
};
