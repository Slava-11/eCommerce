import { AppButton } from "../../components/AppButton/AppButton";
import "./SectionInput.scss";
import c from "classnames";
import letter from "../../img/letter.svg";

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
  const inputClass = c("app__input", classNameInput);
  const imgClass = c("app__input-img", classNameImg);
  return (
    <section className={inputClass}>
      <img className={imgClass} src={letter} alt="no letter" />
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
