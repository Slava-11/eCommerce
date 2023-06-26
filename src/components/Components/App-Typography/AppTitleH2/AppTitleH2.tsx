import './AppTitleH2.scss'
import { CSSProperties } from 'react'

interface AppTitleH2 {
  className?: string;
  children: string;
  style?: CSSProperties;
}

export const AppTitleH2: React.FC<AppTitleH2> = ({ className, children, style }) => {
  return (
    <>
      <h2 className={`app-title-h2 ${className}`} style={style}>{children}</h2>
    </>
  );
};
