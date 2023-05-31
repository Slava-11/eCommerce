import "./App.scss";
import "./scss/mixins.scss";
import "./scss/var.scss";
import "./scss/body.scss";
import { Header } from "./components/Header/Header";
import { About } from "./components/About/About";
import { Service } from "./components/Service/Service";
import { Activity } from "./components/Activity/Activity";
import { Product } from "./components/Product/Product";
import { Process } from "./components/Process/Process";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";

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
