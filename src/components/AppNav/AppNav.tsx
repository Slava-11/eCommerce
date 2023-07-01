import classNames from "classnames";
import './AppNav.scss'

type AppNavProps = {
  classNameNav?: string;
  classNameLink?: string;
};

export const AppNav = ({ classNameNav, classNameLink }: AppNavProps) => {
  const appNav = classNames("app-nav", classNameNav);
  const appNavLink = classNames("app-nav-link", classNameLink);
  return (
    <nav className={appNav}>
      <a className={appNavLink} href="#">
        About
      </a>
      <a className={appNavLink} href="#">
        Product
      </a>
      <a className={appNavLink} href="#">
        Service
      </a>
      <a className={appNavLink} href="#">
        Contact
      </a>
    </nav>
  );
};
