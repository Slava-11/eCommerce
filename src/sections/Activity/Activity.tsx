import { AppCard } from "../SectionCard/SectionCard";
import { AppContainer } from "../SectionContainer/SectionContainer";
import { AppLabel } from "../../components/AppLabel/AppLabel";
import { AppTitleH2 } from "../../components/App-Typography/AppTitleH2/AppTitleH2";
import { AppTitleP } from "../../components/App-Typography/AppP/AppP";
import "./Activity.scss";

import grow from "../../img/grow.svg";
import priceList from "../../img/price-list.svg";
import report from "../../img/report.svg";
import сonversion from "../../img/сonversion.svg";

export const Activity = () => {
  return (
    <section className="activity">
      <AppContainer>
        <div className="activity-container">
          <section className="activity__content">
            <AppLabel>WHAT WE DO</AppLabel>
            <AppTitleH2>Our creative process for your business</AppTitleH2>
            <AppTitleP>
              As our motto, we always provide the best service especially for
              you and your company by growing your company to be better.
            </AppTitleP>
          </section>
          <section className="activity__cards">
            <AppCard
              titleText="Grow your traffic"
              text="We always help your company to grow with us."
              img={grow}
              bgColor="#3E3125"
            />
            <AppCard
              titleText="Content for sales"
              text="Every company that we handel. We always content more sales."
              img={priceList}
              bgColor="#172656"
              mainBgColor="#1A1A3D"
            />
            <AppCard
              titleText="Reporting & analytics"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing"
              img={report}
              bgColor="#3E0B39"
            />
            <AppCard
              titleText="Better Conversion"
              text="We always help your company to grow with us."
              img={сonversion}
              bgColor="#3D1C25"
            />
          </section>
        </div>
      </AppContainer>
    </section>
  );
};
