import "../Work.css";

import { Link } from "react-router-dom";
import { useState } from "react";
import { scrollToTop } from "../../General/utilities.js";

export default function WorkContent(props) {
  const [isHover, setIsHover] = useState(false);
  
  let borderBool = props.borderBool;
  let spaceBool = props.spaceBool;

  const handleMouseEnter = () => {
    setIsHover(true);
  }

  const handleMouseLeave = () => {
    setIsHover(false);
  }

  const spaceStyle = {
    borderBottom: borderBool ? "1px solid #282828" : "",
    backgroundColor: isHover ? `${props.bgColor}` : "",
  }
  
  return (
    <Link
      to={props.linkOut}
      onClick={scrollToTop}
      id="work"
      className="work-page-content"
      style={spaceStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="work-page-left-content">
        <div className="wpc-case-number">{props.csNumber}</div>
        <h2 className="wpc-cs-title">{props.csTitle}</h2>
      </div>

      <div className="work-page-right-content">
        <div className="wpc-top-right-text">{props.textTop}</div>
        <br />
        {spaceBool && (
          <>
            <br />
          </>
        )}
        <div className="wpc-bottom-right-text">{props.textBottom}</div>
        <br />
      </div>
    </Link>
  );
}
