import "./AppTitleH3.scss";
import { CSSProperties } from "react";
import c from "classnames";

type AppTitleH3Props = {
  className?: string;
  children: string;
  style?: CSSProperties;
};

export const AppTitleH3 = ({ className, children, style }: AppTitleH3Props) => {
  const combinedClassName = c("app-title-h3", className);
  return (
    <p className={combinedClassName} style={style}>
      {children}
    </p>
  );
};
