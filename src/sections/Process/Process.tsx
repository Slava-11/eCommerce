import { AppContainer } from "../SectionContainer/SectionContainer";
import { AppLabel } from "../../components/AppLabel/AppLabel";
import { AppTitleH2 } from "../../components/App-Typography/AppTitleH2/AppTitleH2";
import { AppTitleH3 } from "../../components/App-Typography/AppTitleH3/AppTitleH3";
import { AppTitleP } from "../../components/App-Typography/AppP/AppP";
import "./Process.scss";

export const Process = () => {
  return (
    <section className="process">
      <AppContainer>
        <div className="process-container">
          <section className="process__content">
            <AppLabel>CREATIVE PROCESS</AppLabel>
            <AppTitleH2>Know your ads inside & out-perform</AppTitleH2>
            <AppTitleP>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries,
            </AppTitleP>
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
                style={{
                  fontWeight: "700",
                  fontSize: "24px",
                  color: "black",
                  marginTop: "23px",
                  marginLeft: "36px",
                }}
              >
                Satisfied Clients
              </AppTitleH3>
              <div className="process__photo-avatars">
                <img className="process__photo-avatar" src="src/img/avatar1.png" alt="no avatar" />
                <img className="process__photo-avatar" src="src/img/avatar2.png" alt="no avatar" />
                <img className="process__photo-avatar" src="src/img/avatar3.png" alt="no avatar" />
                <img className="process__photo-avatar" src="src/img/avatar4.png" alt="no avatar" />
                <img className="process__photo-avatar" src="src/img/avatar5.png" alt="no avatar" />
              </div>
            </div>
          </section>
        </div>
      </AppContainer>
    </section>
  );
};
