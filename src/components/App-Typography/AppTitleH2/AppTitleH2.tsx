import "./AppTitleH2.scss";
import { CSSProperties } from "react";
import classNames from "classnames";

type AppTitleH2Props = {
  className?: string;
  children: string;
  style?: CSSProperties;
};

export const AppTitleH2 = ({ className, children, style }: AppTitleH2Props) => {
  const combinedClassName = classNames("app-title-h2", className);
  return (
    <h2 className={combinedClassName} style={style}>
      {children}
    </h2>
  );
};
