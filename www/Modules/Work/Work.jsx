import "./Work.css";

import data from "./data.jsx";

import RegularLanding from "../Regular Landing/RegularLanding.jsx";
import WorkContent from "./Content Components/Content.jsx";
import Footer from "../Footer/Footer.jsx";
import Topnav from "../Topnav/Topnav.jsx";

const CaseStudies = data.map((info) => {
  return (
    <WorkContent
      key={info.id}
      csNumber={info.csnumber}
      csTitle={info.cstitle}
      linkOut={info.linkout}
      textTop={info.texttop}
      textBottom={info.textbottom}
      borderBool={info.border}
      spaceBool={info.space}
      bgColor={info.backgroundcolor}
    />
  );
});

export default function Work() {
  return (
    <>
      <div>
        <Topnav />
        <RegularLanding text="WORK" />
        <div className="wpc-spacing">{CaseStudies}</div>
        <Footer />
      </div>
    </>
  );
}
