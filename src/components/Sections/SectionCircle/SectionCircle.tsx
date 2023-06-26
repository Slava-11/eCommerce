import { AppTitleH3 } from "../../Components/App-Typography/AppTitleH3/AppTitleH3";
import React, { ReactNode } from "react";
import "./SectionCircle.scss";

interface SectionCircleProps {
  text: string;
  classNameText?: string;
  classNameCircle?: string;
  children?: ReactNode;
}

export const SectionCircle: React.FC<SectionCircleProps> = ({
  text,
  classNameText,
  classNameCircle,
  children,
}) => {
  return (
    <>
      <section className="circle">
        <div className={`circle__container ${classNameCircle}`}>
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
