import { AppContainer } from "../AppContainer/AppContainer";
import { AppInput } from "../AppInput/AppInput";
import { AppTitleH2 } from "../AppTitleH2/AppTitleH2";
import { AppTitleP } from "../AppTitleP/AppTitleP";
import './Contact.scss'

export const Contact = () => {
  return (
    <section className="contact">
      <AppContainer>
        <div className="contact-container">
          <section className="contact__content">
            <AppTitleH2 text="Contact with us." style={{textAlign: 'center'}}/>
            <AppTitleP text="More than 50,000+ companies trusted our business" style={{textAlign: 'center'}}/>
            <AppInput text="Type your messages.." classNameImg="app__input-unique" classNameInput="app__input-distinctive"/>
          </section>
        </div>
      </AppContainer>
    </section>
  )
}
