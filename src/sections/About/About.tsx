import { AppButton } from "../../components/AppButton/AppButton";
import { AppContainer } from "../SectionContainer/SectionContainer";
import { AppInput } from "../SectionInput/SectionInput";
import { AppLabel } from "../../components/AppLabel/AppLabel";
import { AppTitleH2 } from "../../components/App-Typography/AppTitleH2/AppTitleH2";
import { AppTitleH3 } from "../../components/App-Typography/AppTitleH3/AppTitleH3";
import { AppTitleP } from "../../components/App-Typography/AppP/AppP";
import { SectionCircle } from "../SectionCircle/SectionCircle";
import "./About.scss";

export const About = () => {
  return (
      <AppContainer>
        <section className="about">
          <section className="about__content">
            <AppLabel>100% SATISFIED GUARANTEE</AppLabel>
            <AppTitleH2 className="app-title-h2__unique">
              Power up your shopify products
            </AppTitleH2>
            <AppTitleP>
              More than 90,000+ companies trust our business. Get help from a
              dedicated shopify developer today.
            </AppTitleP>
            <AppInput buttonText = 'Sign up'>Your email address</AppInput>
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
              <AppTitleH3 className="app-title-h3__another">
                Make Progress
              </AppTitleH3>
              <AppTitleP
                className="app-title-p__another"
                style={{
                  textAlign: "center",
                  marginBottom: "21px",
                  marginTop: "5px",
                }}
              >
                with opening plans
              </AppTitleP>
              <AppButton classNameButton="app-button__another">
                Buy Plan
              </AppButton>
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
                <AppTitleH3 className="app-title-h3__another">
                  Margaret Philips
                </AppTitleH3>
                <AppTitleP
                  className="app-title-p__another"
                  style={{
                    marginTop: "8px",
                  }}
                >
                  Watch our best services
                </AppTitleP>
              </div>
              <a className="about__photo-review-button" href="#">
                <div className="about__photo-review-circle">
                  <div className="about__photo-review-triangle"></div>
                </div>
              </a>
            </div>
          </section>
          <img className="about__ellipse" src="src/img/aboutEllipse.png" alt="no figure" />
          <img className="about__half-ellipse" src="src/img/aboutHalfEllipse.png" alt="no figure" />
          <img className="about__polygon" src="src/img/aboutPolygon.png" alt="no figure" />
          <img className="about__rectangle" src="src/img/aboutRectangle.png" alt="no figure" />
          <img className="about__small-rectangle" src="src/img/aboutSmallRectangle.png" alt="no figure" />
        </section>
      </AppContainer>
  );
};
