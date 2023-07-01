import { AppTitleH3 } from "../../components/App-Typography/AppTitleH3/AppTitleH3";
import { AppTitleP } from "../../components/App-Typography/AppP/AppP";
import "./SectionCard.scss";

type AppCardProps = {
  titleText: string;
  text: string;
  img: string;
  bgColor?: string;
  mainBgColor?: string;
};

export const AppCard = ({
  text,
  titleText,
  img,
  bgColor,
  mainBgColor,
}: AppCardProps) => {
  const style = { backgroundColor: mainBgColor };
  const mainStyle = { backgroundColor: bgColor };
  return (
    <section className="app__card" style={style}>
      <div className="app__card-photo" style={mainStyle}>
        <img className="app__card-photo-img" src={img} alt="no img" />
      </div>
      <AppTitleH3 children={titleText} />
      <AppTitleP children={text} className="app-title-p__unique" />
    </section>
  );
};
