import { AppCard } from "../AppCard/AppCard";
import { AppContainer } from "../AppContainer/AppContainer";
import { AppLabel } from "../AppLabel/AppLabel";
import { AppTitleH2 } from "../AppTitleH2/AppTitleH2";
import { AppTitleP } from "../AppTitleP/AppTitleP";
import "./Activity.scss";

export const Activity = () => {
  return (
    <section className="activity">
      <AppContainer>
        <div className="activity-container">
          <section className="activity__content">
            <AppLabel text="WHAT WE DO" />
            <AppTitleH2 text="Our creative process for your business" />
            <AppTitleP text="As our motto, we always provide the best service especially for you and your company by growing your company to be better." />
          </section>
          <section className="activity__cards">
            <AppCard
              titleText="Grow your traffic"
              text="We always help your company to grow with us."
              img="src/img/grow.svg"
              bgColor="#3E3125"
            />
            <AppCard
              titleText="Content for sales"
              text="Every company that we handel. We always content more sales."
              img="src/img/price-list.svg"
              bgColor="#172656"
              mainBgColor="#1A1A3D"
            />
            <AppCard
              titleText="Reporting & analytics"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing"
              img="src/img/report.svg"
              bgColor="#3E0B39"
            />
            <AppCard
              titleText="Better Conversion"
              text="We always help your company to grow with us."
              img="src/img/сonversion.svg"
              bgColor="#3D1C25"
            />
          </section>
        </div>
      </AppContainer>
    </section>
  );
};
