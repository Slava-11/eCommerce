import React, { ReactNode } from "react";
import "./AppContainer.scss";

interface AppContainerProps {
  children: ReactNode;
}

export const AppContainer: React.FC<AppContainerProps> = ({ children }) => {
  return <section className="container">{children}</section>;
};
