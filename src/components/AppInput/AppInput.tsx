import { AppButton } from "../AppButton/AppButton";
import "./AppInput.scss";

interface AppInput {
  classNameImg?: string;
  classNameInput?: string;
  text: string;
}

export const AppInput: React.FC<AppInput> = ({ classNameImg, classNameInput, text }) => {
  return (
    <section className={`app__input ${classNameInput}`}>
      <img
        className={`app__input-img ${classNameImg}`}
        src="/src/img/letter.svg"
        alt="no letter"
      />
      <input
        className="app__input-row"
        type="text"
        name="name"
        placeholder={text}
        required
      />
      <AppButton text="Sign up" />
    </section>
  );
};
