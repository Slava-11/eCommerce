import "./AppLabel.scss";
import c from "classnames";

type AppLabelProps = {
  children: string;
};

export const AppLabel = ({ children }: AppLabelProps) => {
  const combinedClassName = c("app-title-h4");
  return <h4 className={combinedClassName}>{children}</h4>;
};
