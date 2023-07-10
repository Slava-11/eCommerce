import { AppButton } from "../../components/AppButton/AppButton";
import { AppContainer } from "../SectionContainer/SectionContainer";
import { AppInput } from "../SectionInput/SectionInput";
import { AppLabel } from "../../components/AppLabel/AppLabel";
import { AppTitleH2 } from "../../components/App-Typography/AppTitleH2/AppTitleH2";
import { AppTitleH3 } from "../../components/App-Typography/AppTitleH3/AppTitleH3";
import { AppTitleP } from "../../components/App-Typography/AppP/AppP";
import { SectionCircle } from "../SectionCircle/SectionCircle";
import "./About.scss";
import human from "../../img/human.png";
import mainRectangleBlue from "../../img/mainRectangle-blue.png";
import mainRectangleYellow from "../../img/mainRectangle-yellow.png";
import list from "../../img/list.png";
import rectangleOrange from "../../img/rectangleOrange.png";
import woman from "../../img/woman.png";
import aboutEllipse from "../../img/aboutEllipse.png";
import aboutHalfEllipse from "../../img/aboutHalfEllipse.png";
import aboutPolygon from "../../img/aboutPolygon.png";
import aboutRectangle from "../../img/aboutRectangle.png";
import aboutSmallRectangle from "../../img/aboutSmallRectangle.png";

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
          <AppInput buttonText="Sign up">Your email address</AppInput>
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
          <img className="about__photo-human" src={human} alt="no human" />
          <img
            className="about__photo-rectangle-blue"
            src={mainRectangleBlue}
            alt="no rectangle"
          />
          <img
            className="about__photo-rectangle-yellow"
            src={mainRectangleYellow}
            alt="no rectangle"
          />
          <div className="about__photo-progress">
            <img
              className="about__photo-progress-img"
              src={list}
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
              src={rectangleOrange}
              alt="no rectangleOrange"
            />
            <img
              className="about__photo-review-img"
              src={woman}
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
        <img className="about__ellipse" src={aboutEllipse} alt="no figure" />
        <img
          className="about__half-ellipse"
          src={aboutHalfEllipse}
          alt="no figure"
        />
        <img className="about__polygon" src={aboutPolygon} alt="no figure" />
        <img
          className="about__rectangle"
          src={aboutRectangle}
          alt="no figure"
        />
        <img
          className="about__small-rectangle"
          src={aboutSmallRectangle}
          alt="no figure"
        />
      </section>
    </AppContainer>
  );
};
