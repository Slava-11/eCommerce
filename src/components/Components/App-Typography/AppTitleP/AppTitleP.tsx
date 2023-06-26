import "./AppTitleP.scss";
import { CSSProperties } from "react";

interface AppTitlePProps {
  className?: string;
  children: string;
  style?: CSSProperties; // Добавлено новое поле 'style' в пропсы
}

export const AppTitleP: React.FC<AppTitlePProps> = ({
  className,
  children,
  style, // Добавлено новое поле 'style'
}) => {
  return (
    <p className={`app-title-p ${className}`} style={style}> {/* Используется переданный стиль */}
      {children}
    </p>
  );
};
