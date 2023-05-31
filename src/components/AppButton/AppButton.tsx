import './AppButton.scss';

interface AppButtonProps {
  classNameButton?: string;
  classNameMargin?: string;
  text: string;
}

export const AppButton: React.FC<AppButtonProps> = ({ text, classNameMargin, classNameButton }) => {
  return (
    <button className={`app-button ${classNameMargin} ${classNameButton}`}>{text}</button>
  )
}
