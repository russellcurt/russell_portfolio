import "../Topnav.css";

import invSvg from "../Assets/inv.svg";
import mobileInv from "../Assets/tablet-icon-inv.svg";

import TimeDisplay from "./TimeDisplay.jsx";

import { MapPin } from "react-feather";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { scrollToTop } from "../../General/utilities.js";

const outlineVariants = {
  default: {
    pathLength: 0,
  },
  hover: {
    pathLength: 1,
    stroke: "#f3f2ed",
    transition: { duration: 0.5 },
    strokeWidth: 1,
  },
};

const Overlay = ({ show, onClose }) => {
  const location = useLocation();
  let content = null;

  useEffect(() => {
    if (!show) {
      const body = document.body;
      body.style.overflow = "auto"; // Enable scrolling
    }
  }, [show]);

  if (location.pathname === "/russell_portfolio/recreation") {
    content = (
      <>
        <Link onClick={scrollToTop} to="/russell_portfolio/about">About</Link>
        <Link onClick={scrollToTop} to="/russell_portfolio/work">Work</Link>
        <Link onClick={scrollToTop} to="/russell_portfolio/contact">Contact</Link>
      </>
    );
  } else if (location.pathname === "/russell_portfolio/about") {
    content = (
      <>
        <Link onClick={scrollToTop} to="/russell_portfolio/work">Work</Link>
        <Link onClick={scrollToTop} to="/russell_portfolio/recreation">Recreation</Link>
        <Link onClick={scrollToTop} to="/russell_portfolio/contact">Contact</Link>
      </>
    );
  } else if (location.pathname === "/russell_portfolio/work") {
    content = (
      <>
        <Link onClick={scrollToTop} to="/russell_portfolio/about">About</Link>
        <Link onClick={scrollToTop} to="/russell_portfolio/recreation">Recreation</Link>
        <Link onClick={scrollToTop} to="/russell_portfolio/contact">Contact</Link>
      </>
    );
  } else if (location.pathname === "/russell_portfolio/contact") {
    content = (
      <>
        <Link onClick={scrollToTop} to="/russell_portfolio/about">About</Link>
        <Link onClick={scrollToTop} to="/russell_portfolio/work">Work</Link>
        <Link onClick={scrollToTop} to="/russell_portfolio/recreation">Recreation</Link>
      </>
    );
  }

  if (!show) return null;

  return (
    <div className="overlay">
      <div id="myNav">
        <nav className="nav-container">
          <Link onClick={scrollToTop} to="/russell_portfolio/">
            <motion.div
              className="personal-logo"
              whileHover="hover"
              intial="default"
              animate="default"
            >
              <img className="personal-logo-img" src={invSvg} />
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
            <img src={mobileInv} className="flat-logo" alt="" />
          </Link>
          <div className="navbtn-container">
            <span
              onClick={onClose}
              className={`nav-plus-btn nav-plus-btn-inv ${
                show ? "rotate" : ""
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
        <div className="overlay-menu">{content}</div>
      </div>
    </div>
  );
};

export default Overlay;
