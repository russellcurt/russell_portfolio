import "./Topnav.css";

import regLogo from "./Assets/reg.svg";
import mobileReg from "./Assets/tablet-icon-reg.svg"

import Overlay from "./Content Component/Overlay";
import TimeDisplay from "./Content Component/TimeDisplay.jsx";

import { MapPin } from "react-feather";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { scrollToTop } from "../General/utilities.js";

const outlineVariants = {
  default: {
    pathLength: 0,
  },
  hover: {
    pathLength: 1,
    stroke: "#282828",
    transition: { duration: 0.5 },
    strokeWidth: 1,
  },
};

export default function Topnav() {
  const [showOverlay, setShowOverlay] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("top");
  const prevScrollY = useRef(0);

  // Set up the scroll lock when the overlay is shown
  useEffect(() => {
    const disableScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollLeft = window.scrollX || document.documentElement.scrollLeft;

      window.onscroll = function () {
        window.scrollTo(scrollLeft, scrollTop);
      };
    };

    if (showOverlay) {
      disableScroll();
    }

    return () => {
      // Clean up the scroll lock when the overlay is hidden
      window.onscroll = null;
    };
  }, [showOverlay]);

  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
  };

  useEffect(() => {
    const handleScroll = () => {
      const positionY = window.scrollY;

      if (positionY > prevScrollY.current) {
        setScrollDirection("down");
      } else if (positionY < prevScrollY.current) {
        setScrollDirection("up");
      } else {
        setScrollDirection("top");
      }

      prevScrollY.current = positionY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section className={"navbar " + scrollDirection}>
        <nav className="nav-container">
          <Link onClick={scrollToTop} to="/">
            <motion.div
              className="personal-logo"
              whileHover="hover"
              intial="default"
              animate="default"
            >
              <img
                className="personal-logo-img"
                src={regLogo}
                alt="personal logo"
              />
              <motion.svg
                width="147"
                height="97"
                viewBox="0 0 147 97"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  d="M126.416 83.4923L126.414 83.4936C110.25 93.7324 89.4995 94.0314 69.3562 90.8869C51.7078 87.9586 32.2463 84.2599 19.5933 73.3425C8.67225 63.9113 2.48708 48.8148 3.46854 34.9609C4.44717 21.1469 12.5457 8.56536 30.2516 4.0383L30.2533 4.03787C39.2735 1.69875 49.193 2.74406 58.529 4.27673L58.5313 4.27709C66.6079 5.56465 74.6711 7.08276 82.6822 8.59107C84.3523 8.9055 86.02 9.21951 87.6852 9.53092L87.6879 9.5314C90.7714 10.0909 94.013 10.5543 97.3003 11.0244C97.7847 11.0936 98.27 11.163 98.7559 11.2329C102.545 11.7776 106.377 12.3514 110.108 13.1113C117.579 14.6325 124.592 16.8895 129.993 21.097L129.994 21.0981C141.024 29.624 145.187 44.2918 143.386 55.7922C141.746 66.1791 136.909 76.914 126.416 83.4923Z"
                  variants={outlineVariants}
                ></motion.path>
              </motion.svg>
            </motion.div>
            <img src={mobileReg} className="flat-logo" alt="" />
          </Link>

          <div className="navbtn-container">
            <span
              onClick={toggleOverlay}
              className={`nav-plus-btn nav-plus-btn-reg ${
                showOverlay ? "rotate" : ""
              }`}
            ></span>
          </div>
          <div className="geolocation">
            <div className="location">
              <span className="location-icon">
                <MapPin size={18} />
              </span>
              Los Angeles, CA
            </div>
            <TimeDisplay />
          </div>
        </nav>
      </section>
      <Overlay show={showOverlay} onClose={toggleOverlay} />
    </>
  );
}
