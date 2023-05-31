import './AppTitleH3.scss'
import { CSSProperties } from 'react';

interface AppTitleH3 {
  className?: string;
  text: string;
  style?: CSSProperties;
}

export const AppTitleH3: React.FC<AppTitleH3> = ({ className, text, style }) => {
  return (
    <>
      <p className={`app-title-h3 ${className}`} style={style}>{text}</p>
    </>
  );
};
