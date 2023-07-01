import "./AppTitleH3.scss";
import { CSSProperties } from "react";
import classNames from "classnames";

type AppTitleH3Props = {
  className?: string;
  children: string;
  style?: CSSProperties;
};

export const AppTitleH3 = ({ className, children, style }: AppTitleH3Props) => {
  const combinedClassName = classNames("app-title-h3", className);
  return (
    <p className={combinedClassName} style={style}>
      {children}
    </p>
  );
};
