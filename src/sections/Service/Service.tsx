import { AppContainer } from "../SectionContainer/SectionContainer";
import { AppLabel } from "../../components/AppLabel/AppLabel";
import { AppTitleH2 } from "../../components/App-Typography/AppTitleH2/AppTitleH2";
import { AppTitleH3 } from "../../components/App-Typography/AppTitleH3/AppTitleH3";
import { AppTitleP } from "../../components/App-Typography/AppP/AppP";
import "./Service.scss";
import telephone from "../../img/telephone.png";

export const Service = () => {
  return (
    <section className="service">
      <AppContainer>
        <div className="service-container">
          <section className="service__photo">
            <img
              className="service__photo-img"
              src={telephone}
              alt="no phone"
            />
          </section>
          <section className="service__content">
            <AppLabel>SERVICES WE PROVIDES</AppLabel>
            <AppTitleH2>
              Build on both: Google web stories and AMP website format
            </AppTitleH2>
            <div className="service__progress">
              <div className="service__statistics">
                <AppTitleH3
                  style={{ fontSize: "38px", color: "var(--yellow)" }}
                >
                  5660
                </AppTitleH3>
                <AppTitleP
                  className="app-title-p__unique"
                  style={{ marginTop: "13px" }}
                >
                  Product sale per day working and sales
                </AppTitleP>
              </div>
              <div className="service__statistics-border"></div>
              <div className="service__statistics">
                <AppTitleH3 style={{ fontSize: "38px", color: "#FB5607" }}>
                  4M+
                </AppTitleH3>
                <AppTitleP
                  className="app-title-p__unique"
                  style={{ marginTop: "13px" }}
                >
                  Downloaded saled in your good.
                </AppTitleP>
              </div>
            </div>
          </section>
        </div>
      </AppContainer>
    </section>
  );
};
