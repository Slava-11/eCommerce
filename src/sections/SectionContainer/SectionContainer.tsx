import React, { ReactNode } from "react";
import "./SectionContainer.scss";

type AppContainerProps = {
  children: ReactNode;
};

export const AppContainer = ({ children }: AppContainerProps) => {
  return <section className="container">{children}</section>;
};
