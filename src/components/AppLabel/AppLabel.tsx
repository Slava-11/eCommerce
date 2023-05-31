import "./AppLabel.scss";

interface AppLabel {
  text: string;
}

export const AppLabel: React.FC<AppLabel> = ({ text }) => {
  return (
    <div>
      <h4 className="app-title-h4">{text}</h4>
    </div>
  );
};
