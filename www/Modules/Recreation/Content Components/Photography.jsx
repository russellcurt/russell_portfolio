import "../Recreation.css";
import "react-lazy-load-image-component/src/effects/blur.css";

import photoImg1 from "../Assets/photography-assets/photography-img-1.png";
import photoImg1LQIP from "../Assets/photography-assets/photography-img-1-lqip.png";
import photoImg2 from "../Assets/photography-assets/photography-img-2.png";
import photoImg2LQIP from "../Assets/photography-assets/photography-img-2-lqip.png";
import photoImg3 from "../Assets/photography-assets/photography-img-3.png";
import photoImg3LQIP from "../Assets/photography-assets/photography-img-3-lqip.png";
import photoImg4 from "../Assets/photography-assets/photography-img-4.png";
import photoImg4LQIP from "../Assets/photography-assets/photography-img-4-lqip.png";
import photoImg5 from "../Assets/photography-assets/photography-img-5.png";
import photoImg5LQIP from "../Assets/photography-assets/photography-img-5-lqip.png";
import photoImg6 from "../Assets/photography-assets/photography-img-6.png";
import photoImg6LQIP from "../Assets/photography-assets/photography-img-6-lqip.png";
import photoImg7 from "../Assets/photography-assets/photography-img-7.png";
import photoImg7LQIP from "../Assets/photography-assets/photography-img-7-lqip.png";
import photoImg8 from "../Assets/photography-assets/photography-img-8.png";
import photoImg8LQIP from "../Assets/photography-assets/photography-img-8-lqip.png";

import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Photography() {
  return (
    <section className="acc-page-general-stylings">
      <div className="focus-page-container">
        <div className="focus-body">
          <div className="focus-body-container">
            <LazyLoadImage
              src={photoImg1}
              placeholderSrc={photoImg1LQIP}
              wrapperClassName="LLI-stylings"
              effect="blur"
            />
            <LazyLoadImage
              src={photoImg2}
              placeholderSrc={photoImg2LQIP}
              wrapperClassName="LLI-stylings"
              effect="blur"
            />
            <LazyLoadImage
              src={photoImg3}
              placeholderSrc={photoImg3LQIP}
              wrapperClassName="LLI-stylings"
              effect="blur"
            />
            <LazyLoadImage
              src={photoImg4}
              placeholderSrc={photoImg4LQIP}
              wrapperClassName="LLI-stylings"
              effect="blur"
            />
            <LazyLoadImage
              src={photoImg5}
              placeholderSrc={photoImg5LQIP}
              wrapperClassName="LLI-stylings"
              effect="blur"
            />
            <LazyLoadImage
              src={photoImg6}
              placeholderSrc={photoImg6LQIP}
              wrapperClassName="LLI-stylings"
              effect="blur"
            />
            <LazyLoadImage
              src={photoImg7}
              placeholderSrc={photoImg7LQIP}
              wrapperClassName="LLI-stylings"
              effect="blur"
            />
            <LazyLoadImage
              src={photoImg8}
              placeholderSrc={photoImg8LQIP}
              wrapperClassName="LLI-stylings"
              effect="blur"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
