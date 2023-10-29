import "./About.css";
import Footer from "../Footer/Footer.jsx";
import Topnav from "../Topnav/Topnav.jsx";
import RegularLanding from "../Regular Landing/RegularLanding.jsx";
import ProfileInfo from "./Content Components/ProfileInfo.jsx";
import Info from "./Content Components/Info.jsx";
import data from "./data.jsx";

const information = data.map((info) => {
  return (
    <Info
      key={info.id}
      section={info.section}
      title={info.title}
      titleSpaces={info.titleSpaces}
      selector={info.svgSelector}
      center={info.center}
      right={info.right}
      centerSpaces={info.centerSpaces}
      rightSpaces={info.rightSpaces}
    />
  );
});

export default function About() {
  return (
    <>
      <div>
        <Topnav />
        <div className="about-page-styling">
          <RegularLanding key="ABOUT" text="ABOUT" />
        </div>
        <div className="about-page-styling">
        <ProfileInfo />
        </div>
        {information}
        <Footer />
      </div>
    </>
  );
}
