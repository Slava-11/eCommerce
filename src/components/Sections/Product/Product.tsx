import { AppContainer } from "../SectionContainer/SectionContainer";
import { AppLabel } from "../../Components/AppLabel/AppLabel";
import { AppTitleH2 } from "../../Components/App-Typography/AppTitleH2/AppTitleH2";
import { AppTitleP } from "../../Components/App-Typography/AppTitleP/AppTitleP";
import { SectionCircle } from "../SectionCircle/SectionCircle";
import "./Product.scss";

export const Product = () => {
  return (
    <section className="product">
      <AppContainer>
        <div className="product-container">
          <section className="product__content">
            <AppLabel>OUR PRODUCT STORIES</AppLabel>
            <AppTitleH2 text="Why product stories? Learn more" />
            <div className="product__content-text">
              <SectionCircle
                classNameCircle="circle__container"
                classNameText="app-title-h3"
                text="SEO optimized, high Google work"
              >
                <AppTitleP
                  text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                  className="app-title-p__distinctive"
                  style={{ marginTop: "21px" }}
                />
              </SectionCircle>
              <SectionCircle
                classNameCircle="circle__container"
                classNameText="Fast loading, low bounce rates"
                text="Fast loading, low bounce rates."
              >
                <AppTitleP
                  text="It is a long established fact that a reader will be distracted by the readable content."
                  className="app-title-p__distinctive"
                  style={{ marginTop: "21px" }}
                />
              </SectionCircle>
              <SectionCircle
                classNameCircle="circle__container"
                classNameText="app-title-h3"
                text="SEO optimized, high Google work"
              >
                <AppTitleP
                  text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                  className="app-title-p__distinctive"
                  style={{ marginTop: "21px" }}
                />
              </SectionCircle>
            </div>
          </section>
          <section className="product__photo">
            <img
              className="product__photo-rectangle"
              src="src/img/rectangle-blue.png"
              alt="no rectangle"
            />
            <img
              className="product__photo-armchair"
              src="src/img/armchair.png"
              alt="no armchair"
            />
            <div className="product__photo-container">
              <img
                className="product__photo-statistics"
                src="src/img/statistics.png"
                alt="no statistics"
              />
            </div>
          </section>
        </div>
      </AppContainer>
    </section>
  );
};
