import "./AppTitleP.scss";
import { CSSProperties } from "react";

interface AppTitlePProps {
  className?: string;
  text: string;
  style?: CSSProperties; // Добавлено новое поле 'style' в пропсы
}

export const AppTitleP: React.FC<AppTitlePProps> = ({
  className,
  text,
  style, // Добавлено новое поле 'style'
}) => {
  return (
    <p className={`app-title-p ${className}`} style={style}> {/* Используется переданный стиль */}
      {text}
    </p>
  );
};
