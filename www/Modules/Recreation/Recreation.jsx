import "./Recreation.css";
import RegularLanding from "../Regular Landing/RegularLanding.jsx";
import Footer from "../Footer/Footer.jsx";
import Topnav from "../Topnav/Topnav.jsx";
import Accordion from "./Content Components/Accordion.jsx";

export default function Recreation() {
  return (
    <>
      <div>
        <Topnav />
        <RegularLanding text="RECREATION" />
        <Accordion />
        <Footer />
      </div>
    </>
  );
}
