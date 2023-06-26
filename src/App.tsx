import "./App.scss";
import "./scss/mixins.scss";
import "./scss/var.scss";
import "./scss/body.scss";
import { Header } from "./components/Sections/Header/Header";
import { About } from "./components/Sections/About/About";
import { Service } from "./components/Sections/Service/Service";
import { Activity } from "./components/Sections/Activity/Activity";
import { Product } from "./components/Sections/Product/Product";
import { Process } from "./components/Sections/Process/Process";
import { Contact } from "./components/Sections/Contact/Contact";
import { Footer } from "./components/Sections/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <About />
      <Service />
      <Activity />
      <Product />
      <Process />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
