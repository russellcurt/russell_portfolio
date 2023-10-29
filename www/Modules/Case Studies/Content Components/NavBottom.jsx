import "./NavWindow.css";

import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "react-feather";
import { scrollToTop } from "../../General/utilities.js";
export default function NavBottom(props) {
  return (
    <>
      <div className="bottom-nav">
        <Link
          to={props.prevLink}
          onClick={scrollToTop}
          className="bottom-nav-links bottom-nav-links-left"
        >
          <span className="bottom-nav-btn">
            <span className="bottom-nav-btn-arrow feather-arrow-left">
              <ArrowLeft size={31}/>
            </span>
            {props.prevText}
          </span>
        </Link>
        <Link
          to={props.nextLink}
          onClick={scrollToTop}
          className="bottom-nav-links"
        >
          <span className="bottom-nav-btn bottom-nav-links-right">
            {props.nextText}
            <span className="bottom-nav-btn-arrow feather-arrow-right">
              <ArrowRight size={31}/>
            </span>
          </span>
        </Link>
      </div>
    </>
  );
}
