import { AppTitleH3 } from "../../components/App-Typography/AppTitleH3/AppTitleH3";
import  { ReactNode } from "react";
import "./SectionCircle.scss";
import classNames from "classnames";

type SectionCircleProps = {
  text: string;
  classNameText?: string;
  classNameCircle?: string;
  children?: ReactNode;
}

export const SectionCircle = ({
  text,
  classNameText,
  classNameCircle,
  children,
} : SectionCircleProps) => {
  const circleClassName = classNames('circle__container', classNameCircle)
  return (
    <>
      <section className="circle">
        <div className={circleClassName}>
          <img
            className="circle__container-img"
            src="src/img/check.svg"
            alt="no img"
          />
        </div>
        <AppTitleH3 children={text} className={classNameText} />
      </section>
      {children}
    </>
  );
};
