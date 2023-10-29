import "./Contact.css";

import RegularLanding from "../Regular Landing/RegularLanding.jsx";
import ContactFooter from "./Content Components/ContactFooter.jsx";
import Topnav from "../Topnav/Topnav.jsx";

export default function Contact() {
  return (
    <>
      <div>
        <Topnav />
        <RegularLanding text="CONTACT" />
        <ContactFooter />
      </div>
    </>
  );
}
