import "./AppButton.scss";
import classNames from "classnames";

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
  const combinedClassName = classNames(
    "app-button",
    classNameMargin,
    classNameButton
  );
  return <button className={combinedClassName}>{children}</button>;
};
