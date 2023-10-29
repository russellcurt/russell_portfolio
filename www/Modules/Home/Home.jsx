import "./Home.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { scrollToTop } from "../General/utilities.js";

export default function Landing() {
  const [hover, setHover] = useState(false);
  const [under1, setUnder1] = useState(false);
  const [under2, setUnder2] = useState(false);
  const [under3, setUnder3] = useState(false);
  const [under4, setUnder4] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  let hoverStyle = { color: hover ? "#f3f2ed" : "#282828" };
  let under1Style = {
    borderBottom: hover && under1 ? "4px solid #f3f2ed" : "",
    color: hover ? "#f3f2ed" : "",
  };
  let under2Style = {
    borderBottom: hover && under2 ? "4px solid #f3f2ed" : "",
    color: hover ? "#f3f2ed" : "",
  };
  let under3Style = {
    borderBottom: hover && under3 ? "4px solid #f3f2ed" : "",
    color: hover ? "#f3f2ed" : "",
  };
  let under4Style = {
    borderBottom: hover && under4 ? "4px solid #f3f2ed" : "",
    color: hover ? "#f3f2ed" : "",
  };

  return (
    <>
      <section id="home-page" className="mobile-home">
        <div className="home-page-stylings home-media-stylings">
          <div className={`background-overlay ${hover ? "hovered" : ""}`}></div>
          <div className="main-space">
            <div className="page-letters top-row">
              <div>
                <span className="leadLetters r-lead">R</span>
                <span className="follow-letters fname-spacing">
                  <span className="u-follow">u</span>
                  <span className="s1-follow">s</span>
                  <span className="s2-follow">s</span>
                  <span className="e1-follow">e</span>
                  <span className="l1-follow">l</span>
                  <span className="l2-follow">l</span>
                </span>
              </div>
              <div>
                <span className="leadLetters v-lead">V</span>
                <span className="follow-letters lname-spacing">
                  <span className="i-follow">i</span>
                  <span className="l3-follow">l</span>
                  <span className="l4-follow">l</span>
                  <span className="a-follow">a</span>
                  <span className="s3-follow">s</span>
                  <span className="e2-follow">e</span>
                  <span className="n-follow">ñ</span>
                  <span className="o-follow">o</span>
                  <span className="r-follow">r</span>
                </span>
              </div>
            </div>

            <div className="page-letters mid-container">
              <span className="leadLetters">U</span>
              <span className="follow-letters">X Designer </span>

              <span className="leadLetters">+ </span>

              <span className="hp-wrapper">
                <span className="hp-visual-spacing">
                  <span className="leadLetters">V</span>
                  <span className="follow-letters">isual </span>
                </span>
                <span className="hp-design-spacing">
                  <span className="leadLetters">D</span>
                  <span className="follow-letters">esign </span>

                  <span className="leadLetters">+ </span>
                  <span className="hp-graphic-design-spacing">
                    <span className="leadLetters">G</span>
                    <span className="follow-letters">raphic </span>
                    <span className="leadLetters">D</span>
                    <span className="follow-letters">esign </span>
                  </span>
                </span>
              </span>
            </div>

            <div className="page-letters home-media-styles-nav">
              <span className="underline about">
                <Link onClick={scrollToTop} to="/about">
                  <span
                    className="leadLetters"
                    style={{ borderBottom: "4px solid #f3f2ed" }}
                  >
                    A
                  </span>
                  <span
                    className="follow-letters"
                    style={{ borderBottom: "4px solid #f3f2ed" }}
                  >
                    bout
                  </span>
                </Link>
              </span>

              <span className="underline work">
                <Link onClick={scrollToTop} to="/work">
                  <span
                    className="leadLetters"
                    style={{ borderBottom: "4px solid #f3f2ed" }}
                  >
                    W
                  </span>
                  <span
                    className="follow-letters"
                    style={{ borderBottom: "4px solid #f3f2ed" }}
                  >
                    ork
                  </span>
                </Link>
              </span>

              <span className="underline recreation">
                <Link onClick={scrollToTop} to="/recreation">
                  <span
                    className="leadLetters"
                    style={{ borderBottom: "4px solid #f3f2ed" }}
                  >
                    R
                  </span>
                  <span
                    className="follow-letters"
                    style={{ borderBottom: "4px solid #f3f2ed" }}
                  >
                    ecreation
                  </span>
                </Link>
              </span>
            </div>

            <div className="page-letters">
              <span className="underline contact">
                <Link onClick={scrollToTop} to="/contact">
                  <span
                    className="leadLetters"
                    style={{ borderBottom: "4px solid #f3f2ed" }}
                  >
                    C
                  </span>
                  <span
                    className="follow-letters"
                    style={{ borderBottom: "4px solid #f3f2ed" }}
                  >
                    ontact
                  </span>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section id="home-page" className="home-with-triggers">
        <div className="home-page-stylings home-media-stylings">
          <div className={`background-overlay ${hover ? "hovered" : ""}`}></div>
          <div className="main-space">
            <div className="page-letters top-row">
              <div>
                <span
                  className="leadLetters r-lead"
                  style={hoverStyle}
                  // onMouseEnter={handleMouseEnter}
                  // onMouseLeave={handleMouseLeave}
                  onClick={handleMouseEnter}
                >
                  R
                </span>
                <span className="follow-letters fname-spacing">
                  <span className="u-follow">u</span>
                  <span className="s1-follow">s</span>
                  <span className="s2-follow">s</span>
                  <span className="e1-follow">e</span>
                  <span className="l1-follow">l</span>
                  <span className="l2-follow">l</span>
                </span>
              </div>
              <div>
                <span
                  className="leadLetters v-lead"
                  style={hoverStyle}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  V
                </span>
                <span className="follow-letters lname-spacing">
                  <span className="i-follow">i</span>
                  <span className="l3-follow">l</span>
                  <span className="l4-follow">l</span>
                  <span className="a-follow">a</span>
                  <span className="s3-follow">s</span>
                  <span className="e2-follow">e</span>
                  <span className="n-follow">ñ</span>
                  <span className="o-follow">o</span>
                  <span className="r-follow">r</span>
                </span>
              </div>
            </div>

            <div className="page-letters mid-container">
              <span
                className="leadLetters"
                style={hoverStyle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                U
              </span>
              <span className="follow-letters">X Designer </span>

              <span
                className="leadLetters"
                style={hoverStyle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                +{" "}
              </span>

              <span className="hp-wrapper">
                <span className="hp-visual-spacing">
                  <span
                    className="leadLetters"
                    style={hoverStyle}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    V
                  </span>
                  <span className="follow-letters">isual </span>
                </span>
                <span className="hp-design-spacing">
                  <span
                    className="leadLetters"
                    style={hoverStyle}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    D
                  </span>
                  <span className="follow-letters">esign </span>

                  <span
                    className="leadLetters"
                    style={hoverStyle}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    +{" "}
                  </span>
                  <span className="hp-graphic-design-spacing">
                    <span
                      className="leadLetters"
                      style={hoverStyle}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      G
                    </span>
                    <span className="follow-letters">raphic </span>
                    <span
                      className="leadLetters"
                      style={hoverStyle}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      D
                    </span>
                    <span className="follow-letters">esign </span>
                  </span>
                </span>
              </span>
            </div>

            <div className="page-letters home-media-styles-nav">
              <span className="underline about">
                <Link onClick={scrollToTop} to="/about">
                  <span
                    className="leadLetters"
                    style={under1Style}
                    onMouseEnter={() => {
                      handleMouseEnter();
                      setUnder1(true);
                    }}
                    onMouseLeave={() => {
                      handleMouseLeave();
                      setUnder1(false);
                    }}
                  >
                    A
                  </span>
                </Link>
                <span className="follow-letters" style={under1Style}>
                  bout
                </span>
              </span>

              <span className="underline work">
                <Link onClick={scrollToTop} to="/work">
                  <span
                    className="leadLetters"
                    style={under2Style}
                    onMouseEnter={() => {
                      handleMouseEnter();
                      setUnder2(true);
                    }}
                    onMouseLeave={() => {
                      handleMouseLeave();
                      setUnder2(false);
                    }}
                  >
                    W
                  </span>
                </Link>
                <span className="follow-letters" style={under2Style}>
                  ork
                </span>
              </span>

              <span className="underline recreation">
                <Link onClick={scrollToTop} to="/recreation">
                  <span
                    className="leadLetters"
                    style={under3Style}
                    onMouseEnter={() => {
                      handleMouseEnter();
                      setUnder3(true);
                    }}
                    onMouseLeave={() => {
                      handleMouseLeave();
                      setUnder3(false);
                    }}
                  >
                    R
                  </span>
                </Link>
                <span className="follow-letters" style={under3Style}>
                  ecreation
                </span>
              </span>
            </div>

            <div className="page-letters">
              <span className="underline contact">
                <Link onClick={scrollToTop} to="/contact">
                  <span
                    className="leadLetters"
                    style={under4Style}
                    onMouseEnter={() => {
                      handleMouseEnter();
                      setUnder4(true);
                    }}
                    onMouseLeave={() => {
                      handleMouseLeave();
                      setUnder4(false);
                    }}
                  >
                    C
                  </span>
                </Link>
                <span className="follow-letters" style={under4Style}>
                  ontact
                </span>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
