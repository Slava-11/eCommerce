import { AppButton } from "../AppButton/AppButton";
import { AppContainer } from "../AppContainer/AppContainer";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import "./AppNavigation.scss";

interface AppNavigation {
  classNameContainer?: string;
  classNameNav?: string;
  classNameNavButton?: string;
  classNameButtons?: string;
  classNameSocial?: string;
  classNameBurger?: string;
}

export const AppNavigation: React.FC<AppNavigation> = ({
  classNameContainer,
  classNameNav,
  classNameNavButton,
  classNameButtons,
  classNameSocial,
  classNameBurger,
}) => {
  return (
    <section className="app__navigation">
      <AppContainer>
        <div className={`app__navigation-container ${classNameContainer}`}>
          <img
            className="app__navigation-logo"
            src="src/img/logo.png"
            alt="no logo"
          />
          <BurgerMenu classNameBurger={classNameBurger} />
          <nav className={`app__navigation-nav ${classNameNav}`}>
            <a
              className={`app__navigation-nav-button ${classNameNavButton}`}
              href="#"
            >
              About
            </a>
            <a
              className={`app__navigation-nav-button ${classNameNavButton}`}
              href="#"
            >
              Product
            </a>
            <a
              className={`app__navigation-nav-button ${classNameNavButton}`}
              href="#"
            >
              Service
            </a>
            <a
              className={`app__navigation-nav-button ${classNameNavButton}`}
              href="#"
            >
              Contact
            </a>
          </nav>
          <div className={`app__navigation-buttons ${classNameButtons}`}>
            <AppButton
              text="Sign in"
              classNameButton="app-button__distinctive"
            />
            <AppButton text="Try Free" classNameMargin="app-button__unique" />
          </div>
          <div className={`app__navigation-social ${classNameSocial}`}>
            <a className="app__navigation-social-button" href="#">
              <img
                className="app__navigation-social-network"
                src="src/img/facebook.svg"
                alt="no social-network"
              />
            </a>
            <a className="app__navigation-social-button" href="#">
              <img
                className="app__navigation-social-network"
                src="src/img/twitter.svg"
                alt="no social-network"
              />
            </a>
            <a className="app__navigation-social-button" href="#">
              <img
                className="app__navigation-social-network"
                src="src/img/instagram.svg"
                alt="no social-network"
              />
            </a>
            <a className="app__navigation-social-button" href="#">
              <img
                className="app__navigation-social-network"
                src="src/img/linkedin.svg"
                alt="no social-network"
              />
            </a>
          </div>
        </div>
      </AppContainer>
    </section>
  );
};
