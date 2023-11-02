import "../About.css";

import candid from "../Assets/candid.png";
import resume from "../Assets/Resume - Russell Villasenor.pdf";

import { useState } from "react";

export default function ProfileInfo() {
  const [titleHover, setTitleHover] = useState(false);

  const handleTitleMOver = () => {
    setTitleHover(true);
  };

  const handleTitleMOut = () => {
    setTitleHover(false);
  };

  return (
    <section id="about">
      <div className="about-container">
        <div className="about-img">
          <img src={candid} />
        </div>
        <div className="text-space">
          <h1
            className="about-title"
            onMouseOver={handleTitleMOver}
            onMouseOut={handleTitleMOut}
          >
            Hi I'm <span className="in-text in-text-name">Russell</span>
            <span className="in-text-period">.</span> <br />
            <span className="about-header-formatting">
              Let's&nbsp;
              <span
                className={`header-underline-value ${
                  titleHover ? "mobile-header-underline" : ""
                }`}
              >
                <span className="in-text in-text-create">create</span>
              </span>
              &nbsp;
            </span>
            <span className="about-header-formatting">
              something&nbsp;
              <span
                className={`in-text in-text-together about-header-2 header-underline-value ${
                  titleHover ? "mobile-header-underline" : ""
                }`}
              >
                together
              </span>
              <span className="in-text-period">.</span>
            </span>
          </h1>

          <p className="about-p">
            Rooted and residing in Los Angeles, I am a designer that carries a
            passion for purposeful and engaging design. With a focus on the
            human aspect, I aim to go beyond mere usability and create
            experiences that resonate with users. My dedication lies in crafting
            interactions that leave a lasting impact.
            <br />
            <br />
            As a curious creative who is dedicated to growth and development, I
            actively pursue the exploration of new ideas and continuous
            learning. Most recently I've studied User Experience & User
            Interface Design, in addition to my previous studies in Engineering
            Graphics & Design Technology, as well as Automotive Service
            Technology.
          </p>
          <br />
          <br />

          <a className="resume-link" href={resume} target="_blank">
            Resume can be found&nbsp;
            <span className="resume-link-here">here</span>
          </a>
        </div>
      </div>
      <br />
      <br />
    </section>
  );
}
