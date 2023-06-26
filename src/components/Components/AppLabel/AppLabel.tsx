import "./AppLabel.scss";

interface AppLabel {
  children: string;
}

export const AppLabel: React.FC<AppLabel> = ({ children }) => {
  return (
    <div>
      <h4 className="app-title-h4">{children}</h4>
    </div>
  );
};
