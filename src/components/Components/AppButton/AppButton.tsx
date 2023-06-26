import './AppButton.scss';

interface AppButtonProps {
  classNameButton?: string;
  classNameMargin?: string;
  children: string;
}

export const AppButton: React.FC<AppButtonProps> = ({ children, classNameMargin, classNameButton }) => {
  return (
    <button className={`app-button ${classNameMargin} ${classNameButton}`}>{children}</button>
  )
}
