import "./AppLabel.scss";
import classNames from "classnames";

type AppLabelProps = {
  children: string;
};

export const AppLabel = ({ children }: AppLabelProps) => {
  const combinedClassName = classNames("app-title-h4");
  return <h4 className={combinedClassName}>{children}</h4>;
};
