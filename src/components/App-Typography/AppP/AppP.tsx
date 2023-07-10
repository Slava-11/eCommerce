import "./AppP.scss";
import { CSSProperties } from "react";
import c from "classnames";

type AppTitlePProps = {
  className?: string;
  children: string;
  style?: CSSProperties;
};

export const AppTitleP = ({ className, children, style }: AppTitlePProps) => {
  const combinedClassName = c("app-title-p", className);
  return (
    <p className={combinedClassName} style={style}>
      {children}
    </p>
  );
};
