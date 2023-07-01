import { AppButton } from "../../components/AppButton/AppButton";
import "./SectionInput.scss";
import classNames from "classnames";

type AppInputProps = {
  classNameImg?: string;
  classNameInput?: string;
  children: string;
  buttonText: string;
};

export const AppInput = ({
  classNameImg,
  classNameInput,
  children,
  buttonText,
}: AppInputProps) => {
  const inputClass = classNames("app__input", classNameInput);
  const imgClass = classNames("app__input-img", classNameImg);
  return (
    <section className={inputClass}>
      <img className={imgClass} src="/src/img/letter.svg" alt="no letter" />
      <input
        className="app__input-row"
        type="text"
        name="name"
        placeholder={children}
        required
      />
      <AppButton>{buttonText}</AppButton>
    </section>
  );
};
