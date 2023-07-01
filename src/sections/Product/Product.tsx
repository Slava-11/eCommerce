import { AppContainer } from "../SectionContainer/SectionContainer";
import { AppLabel } from "../../components/AppLabel/AppLabel";
import { AppTitleH2 } from "../../components/App-Typography/AppTitleH2/AppTitleH2";
import { AppTitleP } from "../../components/App-Typography/AppP/AppP";
import { SectionCircle } from "../SectionCircle/SectionCircle";
import "./Product.scss";

export const Product = () => {
  return (
    <section className="product">
      <AppContainer>
        <div className="product-container">
          <section className="product__content">
            <AppLabel>OUR PRODUCT STORIES</AppLabel>
            <AppTitleH2>Why product stories? Learn more</AppTitleH2>
            <div className="product__content-text">
              <SectionCircle
                classNameCircle="circle__container"
                classNameText="app-title-h3"
                text="SEO optimized, high Google work"
              >
                <AppTitleP
                  className="app-title-p__distinctive"
                  style={{ marginTop: "21px" }}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </AppTitleP>
              </SectionCircle>
              <SectionCircle
                classNameCircle="circle__container"
                classNameText="Fast loading, low bounce rates"
                text="Fast loading, low bounce rates."
              >
                <AppTitleP
                  className="app-title-p__distinctive"
                  style={{ marginTop: "21px" }}
                >
                  It is a long established fact that a reader will be distracted
                  by the readable content
                </AppTitleP>
              </SectionCircle>
              <SectionCircle
                classNameCircle="circle__container"
                classNameText="app-title-h3"
                text="SEO optimized, high Google work"
              >
                <AppTitleP
                  className="app-title-p__distinctive"
                  style={{ marginTop: "21px" }}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </AppTitleP>
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
