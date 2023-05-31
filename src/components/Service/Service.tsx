import { AppContainer } from "../AppContainer/AppContainer";
import { AppLabel } from "../AppLabel/AppLabel";
import { AppTitleH2 } from "../AppTitleH2/AppTitleH2";
import { AppTitleH3 } from "../AppTitleH3/AppTitleH3";
import { AppTitleP } from "../AppTitleP/AppTitleP";
import "./Service.scss";

export const Service = () => {
  return (
    <section className="service">
      <AppContainer>
        <div className="service-container">
          <section className="service__photo">
            <img
              className="service__photo-img"
              src="src/img/telephone.png"
              alt="no phone"
            />
          </section>
          <section className="service__content">
            <AppLabel text="SERVICES WE PROVIDES" />
            <AppTitleH2 text="Build on both: Google web stories and AMP website format" />
            <div className="service__progress">
              <div className="service__statistics">
                <AppTitleH3 text="5660" style={{fontSize: '38px', color: 'var(--yellow)'}}/>
                <AppTitleP
                  text="Product sale per day working and sales"
                  className="app-title-p__unique"
                  style={{marginTop: '13px'}}
                />
              </div>
              <div className="service__statistics-border"></div>
              <div className="service__statistics">
              <AppTitleH3 text="4M+" style={{fontSize: '38px', color: '#FB5607'}}/>
                <AppTitleP
                  text="Downloaded saled in your good."
                  className="app-title-p__unique"
                  style={{marginTop: '13px'}}
                />
              </div>
            </div>
          </section>
        </div>
      </AppContainer>
    </section>
  );
};
