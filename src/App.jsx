import Hero from "./components/Hero/Hero";
import OurCompany from "./components/OurCompany/OurCompany";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Software from "./components/Software/Software";
import Saleforce from "./components/Saleforce/Saleforce";
import Sap from "./components/Sap/Sap";
import Cloud from "./components/Cloud/Cloud";
import Digital from "./components/Digital/Digital";

export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <OurCompany />
      <Software />
      <Saleforce />
      <Sap />
      <Cloud />
      <Digital />
      <Saleforce />
      <Footer />
    </div>
  );
}
