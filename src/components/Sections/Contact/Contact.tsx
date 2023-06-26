import { AppContainer } from "../SectionContainer/SectionContainer";
import { AppInput } from "../SectionInput/SectionInput";
import { AppTitleH2 } from "../../Components/App-Typography/AppTitleH2/AppTitleH2";
import { AppTitleP } from "../../Components/App-Typography/AppTitleP/AppTitleP";
import "./Contact.scss";

export const Contact = () => {
  return (
    <section className="contact">
      <AppContainer>
        <div className="contact-container">
          <section className="contact__content">
            <AppTitleH2 style={{ textAlign: "center" }}>
              Contact with us.
            </AppTitleH2>
            <AppTitleP style={{ textAlign: "center" }}>
              More than 50,000+ companies trusted our business
            </AppTitleP>
            <AppInput
              text="Type your messages.."
              classNameImg="app__input-unique"
              classNameInput="app__input-distinctive"
            />
          </section>
        </div>
      </AppContainer>
    </section>
  );
};
