import "../Recreation.css";
import "react-lazy-load-image-component/src/effects/blur.css";

import typoImg1 from "../Assets/typography-assets/typography-img-1.png";
import typoImg1LQIP from "../Assets/typography-assets/typography-img-1-lqip.png";
import typoImg2 from "../Assets/typography-assets/typography-img-2.png";
import typoImg2LQIP from "../Assets/typography-assets/typography-img-2-lqip.png";
import typoImg3 from "../Assets/typography-assets/typography-img-3.png";
import typoImg3LQIP from "../Assets/typography-assets/typography-img-3-lqip.png";
import typoImg4 from "../Assets/typography-assets/typography-img-4.png";
import typoImg4LQIP from "../Assets/typography-assets/typography-img-4-lqip.png";
import typoImg5 from "../Assets/typography-assets/typography-img-5.png";
import typoImg5LQIP from "../Assets/typography-assets/typography-img-5-lqip.png";
import typoImg6 from "../Assets/typography-assets/typography-img-6.png";
import typoImg6LQIP from "../Assets/typography-assets/typography-img-6-lqip.png";
import typoImg7 from "../Assets/typography-assets/typography-img-7.png";
import typoImg7LQIP from "../Assets/typography-assets/typography-img-7-lqip.png";

import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Typography() {
  return (
    <section className="acc-page-general-stylings">
      <div className="focus-page-container">
        <div className="focus-body">
          <div className="focus-body-container">
            <LazyLoadImage
              src={typoImg1}
              placeholderSrc={typoImg1LQIP}
              wrapperClassName="LLI-stylings"
              effect="blur"
            />
            <LazyLoadImage
              src={typoImg2}
              placeholderSrc={typoImg2LQIP}
              wrapperClassName="LLI-stylings"
              effect="blur"
            />
            <LazyLoadImage
              src={typoImg3}
              placeholderSrc={typoImg3LQIP}
              wrapperClassName="LLI-stylings"
              effect="blur"
            />
            <LazyLoadImage
              src={typoImg4}
              placeholderSrc={typoImg4LQIP}
              wrapperClassName="LLI-stylings"
              effect="blur"
            />
            <LazyLoadImage
              src={typoImg5}
              placeholderSrc={typoImg5LQIP}
              wrapperClassName="LLI-stylings"
              effect="blur"
            />
            <LazyLoadImage
              src={typoImg6}
              placeholderSrc={typoImg6LQIP}
              wrapperClassName="LLI-stylings"
              effect="blur"
            />
            <LazyLoadImage
              src={typoImg7}
              placeholderSrc={typoImg7LQIP}
              wrapperClassName="LLI-stylings"
              effect="blur"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
