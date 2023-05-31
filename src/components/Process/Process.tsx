import { AppContainer } from "../AppContainer/AppContainer";
import { AppLabel } from "../AppLabel/AppLabel";
import { AppTitleH2 } from "../AppTitleH2/AppTitleH2";
import { AppTitleH3 } from "../AppTitleH3/AppTitleH3";
import { AppTitleP } from "../AppTitleP/AppTitleP";
import "./Process.scss";

export const Process = () => {
  return (
    <section className="process">
      <AppContainer>
        <div className="process-container">
          <section className="process__content">
            <AppLabel text="CREATIVE PROCESS" />
            <AppTitleH2 text="Know your ads inside & out-perform" />
            <AppTitleP text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries," />
          </section>
          <section className="process__photo">
            <img
              className="process__photo-rectangle"
              src="src/img/rectangle-yellow.png"
              alt="no rectangle"
            />
            <img
              className="process__photo-man"
              src="src/img/man.png"
              alt="no man"
            />
            <div className="process__photo-container">
              <AppTitleH3
                text="Satisfied Clients"
                style={{
                  fontWeight: "700",
                  fontSize: "24px",
                  color: "black",
                  marginTop: "23px",
                  marginLeft: "36px",
                }}
              />
            </div>
          </section>
        </div>
      </AppContainer>
    </section>
  );
};
