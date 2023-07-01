import "./App.scss";
import "./scss/mixins.scss";
import "./scss/var.scss";
import "./scss/body.scss";

import { About } from "./sections/About/About";
import { Service } from "./sections/Service/Service";
import { Activity } from "./sections/Activity/Activity";
import { Product } from "./sections/Product/Product";
import { Process } from "./sections/Process/Process";
import { Contact } from "./sections/Contact/Contact";
import { Header } from "./sections/Header/Header";
import { Footer } from "./sections/Footer/Footer";

function App() {
  return (
    <>
      <Header/>
      <About />
      <Service />
      <Activity />
      <Product />
      <Process />
      <Contact />
      <Footer/>
    </>
  );
}

export default App;
