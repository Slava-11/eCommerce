import { AppButton } from "../AppButton/AppButton";
import { AppContainer } from "../AppContainer/AppContainer";
import { AppInput } from "../AppInput/AppInput";
import { AppLabel } from "../AppLabel/AppLabel";
import { AppTitleH2 } from "../AppTitleH2/AppTitleH2";
import { AppTitleH3 } from "../AppTitleH3/AppTitleH3";
import { AppTitleP } from "../AppTitleP/AppTitleP";
import { SectionCircle } from "../SectionCircle/SectionCircle";
import "./About.scss";

export const About = () => {
  return (
    <section className="about">
      <AppContainer>
        <div className="about-container">
          <section className="about__content">
            <AppLabel text="100% SATISFIED GUARANTEE" />
            <AppTitleH2
              text="Power up your shopify products"
              className="app-title-h2__unique"
            />
            <AppTitleP
              text="More than 90,000+ companies trust our business. Get help from a dedicated
      shopify developer today."
            />
            <AppInput text="Your email address" />
            <div className="about__content-circle">
              <SectionCircle
                text="30 days free trial"
                classNameText="app-title-h3__unique"
                classNameCircle="circle__container-unique"
              />
              <SectionCircle
                text="No credit card required"
                classNameText="app-title-h3__unique"
                classNameCircle="circle__container-unique"
              />
            </div>
          </section>
          <section className="about__photo">
            <img
              className="about__photo-human"
              src="src/img/human.png"
              alt="no human"
            />
            <img
              className="about__photo-rectangle-blue"
              src="src/img/mainRectangle-blue.png"
              alt="no rectangle"
            />
            <img
              className="about__photo-rectangle-yellow"
              src="src/img/mainRectangle-yellow.png"
              alt="no rectangle"
            />
            <div className="about__photo-progress">
              <img
                className="about__photo-progress-img"
                src="src/img/list.png"
                alt="no list"
              />
              <AppTitleH3
                text="Make Progress"
                className="app-title-h3__another"
              />
              <AppTitleP
                text="with opening plans"
                className="app-title-p__another"
                style={{
                  textAlign: "center",
                  marginBottom: "21px",
                  marginTop: "5px",
                }}
              />
              <AppButton
                text="Buy Plan"
                classNameButton="app-button__another"
              />
            </div>
            <div className="about__photo-review">
              <img
                className="about__photo-review-img"
                src="src/img/rectangleOrange.png"
                alt="no rectangleOrange"
              />
              <img
                className="about__photo-review-img"
                src="src/img/woman.png"
                alt="np woman"
              />
              <div className="about__photo-review-content">
                <AppTitleH3
                  text="Margaret Philips"
                  className="app-title-h3__another"
                />
                <AppTitleP
                  text="Watch our best services"
                  className="app-title-p__another"
                  style={{
                    marginTop: "8px",
                  }}
                />
              </div>
              <a className="about__photo-review-button" href="#">
                <div className="about__photo-review-circle">
                  <div className="about__photo-review-triangle"></div>
                </div>
              </a>
            </div>
          </section>
        </div>
      </AppContainer>
    </section>
  );
};
