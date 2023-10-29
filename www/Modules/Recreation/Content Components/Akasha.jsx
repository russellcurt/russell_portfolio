import "../Recreation.css";
import "react-lazy-load-image-component/src/effects/blur.css";

import akashaImg1 from "../Assets/akasha-assets/akasha-img-1.png";
import akashaImg1LQIP from "../Assets/akasha-assets/akasha-img-1-lqip.png";
import akashaImg2 from "../Assets/akasha-assets/akasha-img-2.png";
import akashaImg2LQIP from "../Assets/akasha-assets/akasha-img-2-lqip.png";
import akashaImg3 from "../Assets/akasha-assets/akasha-img-3.png";
import akashaImg3LQIP from "../Assets/akasha-assets/akasha-img-3-lqip.png";
import akashaImg4 from "../Assets/akasha-assets/akasha-img-4.png";
import akashaImg4LQIP from "../Assets/akasha-assets/akasha-img-4-lqip.png";
import akashaImg5 from "../Assets/akasha-assets/akasha-img-5.png";
import akashaImg5LQIP from "../Assets/akasha-assets/akasha-img-5-lqip.png";
import akashaImg6 from "../Assets/akasha-assets/akasha-img-6.png";
import akashaImg6LQIP from "../Assets/akasha-assets/akasha-img-6-lqip.png";
import akashaImg7 from "../Assets/akasha-assets/akasha-img-7.png";
import akashaImg7LQIP from "../Assets/akasha-assets/akasha-img-7-lqip.png";

import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Akasha() {
  return (
    <section className="acc-page-general-stylings">
      <div className="focus-page-container">
        <div className="focus-body">
          <div className="focus-body-container">
            <LazyLoadImage
              src={akashaImg1}
              placeholderSrc={akashaImg1LQIP}
              wrapperClassName="LLI-stylings"
              effect="blur"
            />
            <LazyLoadImage
              src={akashaImg2}
              placeholderSrc={akashaImg2LQIP}
              wrapperClassName="LLI-stylings"
              effect="blur"
            />
            <LazyLoadImage
              src={akashaImg3}
              placeholderSrc={akashaImg3LQIP}
              wrapperClassName="LLI-stylings"
              effect="blur"
            />
            <LazyLoadImage
              src={akashaImg4}
              placeholderSrc={akashaImg4LQIP}
              wrapperClassName="LLI-stylings"
              effect="blur"
            />
            <LazyLoadImage
              src={akashaImg5}
              placeholderSrc={akashaImg5LQIP}
              wrapperClassName="LLI-stylings"
              effect="blur"
            />
            <LazyLoadImage
              src={akashaImg6}
              placeholderSrc={akashaImg6LQIP}
              wrapperClassName="LLI-stylings"
              effect="blur"
            />
            <LazyLoadImage
              src={akashaImg7}
              placeholderSrc={akashaImg7LQIP}
              wrapperClassName="LLI-stylings"
              effect="blur"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
