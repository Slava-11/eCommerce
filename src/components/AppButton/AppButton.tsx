import './AppButton.scss';

interface AppButtonProps {
  text: string;
  bgColor?: string;
  borderColor?: string;
  textColor?: string;
  margin?: string;
}

export const AppButton: React.FC<AppButtonProps> = ({ text, bgColor, borderColor, textColor, margin }) => {
  return (
    <button className='app-button' style={{ backgroundColor: bgColor, borderColor: borderColor, color:textColor, marginLeft:margin }}>{text}</button>
  )
}
