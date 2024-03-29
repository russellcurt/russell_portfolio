import "../About.css";

import { useState } from "react";

export default function Info(props) {
  const [hoverState, setHoverState] = useState(false);

  const handleHoverState = () => {
    setHoverState(true);
  };

  const handleHoverOutState = () => {
    setHoverState(false);
  };

  return (
    <>
      <div
        id={props.section}
        onMouseOver={handleHoverState}
        onMouseOut={handleHoverOutState}
      >
        <div
          className={`left-info ${props.selector}`}
          style={{ textDecoration: hoverState ? "underline" : "" }}
        >
          {props.title.first}
          {props.titleSpaces.first}
        </div>
        <div className="center-info">
          {props.center.first}
          {props.centerSpaces.first}
          {props.center.second}
          {props.centerSpaces.second}
          {props.center.third}
          {props.centerSpaces.third}
          {props.center.fourth}
          {props.centerSpaces.fourth}
          {props.center.fifth}
          {props.centerSpaces.fifth}
          {props.center.sixth}
          {props.centerSpaces.sixth}
          {props.center.seventh}
          {props.centerSpaces.seventh}
          {props.center.eighth}
          {props.centerSpaces.eighth}
          {props.center.ninth}
          {props.centerSpaces.ninth}
          {props.center.tenth}
          {props.centerSpaces.tenth}
          {props.center.eleventh}
          {props.centerSpaces.eleventh}
          {props.center.twelveth}
          {props.centerSpaces.twelveth}
        </div>
        <div className="right-info">
          {props.right.first}
          {props.rightSpaces.first}
          {props.right.second}
          {props.rightSpaces.second}
          {props.right.third}
          {props.rightSpaces.third}
          {props.right.fourth}
          {props.rightSpaces.fourth}
          {props.right.fifth}
          {props.rightSpaces.fifth}
        </div>
      </div>
    </>
  );
}
