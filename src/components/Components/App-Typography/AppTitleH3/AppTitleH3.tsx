import './AppTitleH3.scss'
import { CSSProperties } from 'react';

interface AppTitleH3 {
  className?: string;
  children: string;
  style?: CSSProperties;
}

export const AppTitleH3: React.FC<AppTitleH3> = ({ className, children, style }) => {
  return (
    <>
      <p className={`app-title-h3 ${className}`} style={style}>{children}</p>
    </>
  );
};
