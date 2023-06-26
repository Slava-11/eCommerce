import React, { ReactNode } from "react";
import "./SectionContainer.scss";

interface AppContainerProps {
  children: ReactNode;
}

export const AppContainer: React.FC<AppContainerProps> = ({ children }) => {
  return <section className="container">{children}</section>;
};
