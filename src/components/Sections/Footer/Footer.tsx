import { AppNavigation } from "../SectionNavigation/SectionNavigation";
import "./Footer.scss";

export const Footer = () => {
  return (
    <section className="footer">
      <AppNavigation
        classNameButtons="app__navigation-buttons__unique"
        classNameBurger="burger__unique"
        classNameContainer="app__navigation-container__unique"
        classNameNav="app__navigation-nav__unique"
        classNameSocial="app__navigation-social__unique"
        classNameNavButton="app__navigation-nav-button__unique"
      />
    </section>
  );
};
