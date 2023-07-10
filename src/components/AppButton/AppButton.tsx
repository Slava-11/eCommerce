import "./AppButton.scss";
import c from "classnames";

type AppButtonProps = {
  classNameButton?: string;
  classNameMargin?: string;
  children: string;
};

export const AppButton = ({
  children,
  classNameMargin,
  classNameButton,
}: AppButtonProps) => {
  const combinedClassName = c("app-button", classNameMargin, classNameButton);
  return <button className={combinedClassName}>{children}</button>;
};
