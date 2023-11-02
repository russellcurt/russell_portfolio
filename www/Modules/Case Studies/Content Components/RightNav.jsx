import "./CSWindow.css";
import { scrollToRef } from "../../General/utilities.js";

export default function RightNav({
  overviewRef,
  empathizeRef,
  defineRef,
  ideateRef,
  designRef,
  activeSection,
  isTop,
}) {
  return (
    <nav className="right-nav">
      <div
        className={`right-nav-btn rn-top ${
          isTop ? "" : activeSection === "overview" ? "active" : ""
        }`}
        onClick={() => scrollToRef(overviewRef)}
      >
        <span className="rn-cs-step-number">00/</span>Overview
      </div>
      <div
        className={`right-nav-btn ${
          isTop ? "" : activeSection === "empathize" ? "active" : ""
        }`}
        onClick={() => scrollToRef(empathizeRef)}
      >
        <span className="rn-cs-step-number">01/</span>Empathize
      </div>
      <div
        className={`right-nav-btn ${
          isTop ? "" : activeSection === "define" ? "active" : ""
        }`}
        onClick={() => scrollToRef(defineRef)}
      >
        <span className="rn-cs-step-number">02/</span>Define
      </div>
      <div
        className={`right-nav-btn ${
          isTop ? "" : activeSection === "ideate" ? "active" : ""
        }`}
        onClick={() => scrollToRef(ideateRef)}
      >
        <span className="rn-cs-step-number">03/</span>Ideate
      </div>
      <div
        className={`right-nav-btn ${
          isTop ? "" : activeSection === "design" ? "active" : ""
        }`}
        onClick={() => scrollToRef(designRef)}
      >
        <span className="rn-cs-step-number">04/</span>Design
      </div>
    </nav>
  );
}
