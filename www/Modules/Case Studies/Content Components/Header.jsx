import "../CaseStudy.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function Header(props) {
  return (
    <>
      <div id="cs-details">
        <div className="cs-name">{props.title}</div>
        <div className="cs-short-description">{props.text}</div>
        <div className="landing-image"> 
          <LazyLoadImage
            src={props.img}
            placeholderSrc={props.lqip}
            effect="blur"
            wrapperClassName="LLI-stylings"
          />
        </div>
      </div>
    </>
  );
}
