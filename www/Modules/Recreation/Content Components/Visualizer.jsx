import "../Recreation.css";
import "react-lazy-load-image-component/src/effects/blur.css";

import visualizerImg1 from "../Assets/visualizer-assets/visualizer-img-1.png";
import visualizerImg1LQIP from "../Assets/visualizer-assets/visualizer-img-1-lqip.png";
import visualizerImg2 from "../Assets/visualizer-assets/visualizer-img-2.png";
import visualizerImg2LQIP from "../Assets/visualizer-assets/visualizer-img-2-lqip.png";
import visualizerImg3 from "../Assets/visualizer-assets/visualizer-img-3.png";
import visualizerImg3LQIP from "../Assets/visualizer-assets/visualizer-img-3-lqip.png";
import visualizerImg4 from "../Assets/visualizer-assets/visualizer-img-4.png";
import visualizerImg4LQIP from "../Assets/visualizer-assets/visualizer-img-4-lqip.png";
import visualizerImg5 from "../Assets/visualizer-assets/visualizer-img-5.png";
import visualizerImg5LQIP from "../Assets/visualizer-assets/visualizer-img-5-lqip.png";
import visualizerImg6 from "../Assets/visualizer-assets/visualizer-img-6.png";
import visualizerImg6LQIP from "../Assets/visualizer-assets/visualizer-img-6-lqip.png";
import visualizerImg7 from "../Assets/visualizer-assets/visualizer-img-7.png";
import visualizerImg7LQIP from "../Assets/visualizer-assets/visualizer-img-7-lqip.png";
import visualizerImg8 from "../Assets/visualizer-assets/visualizer-img-8.png";
import visualizerImg8LQIP from "../Assets/visualizer-assets/visualizer-img-8-lqip.png";
import visualizerImg9 from "../Assets/visualizer-assets/visualizer-img-9.png";
import visualizerImg9LQIP from "../Assets/visualizer-assets/visualizer-img-9-lqip.png";
import visualizerImg10 from "../Assets/visualizer-assets/visualizer-img-10.png";
import visualizerImg10LQIP from "../Assets/visualizer-assets/visualizer-img-10-lqip.png";
import visualizerImg11 from "../Assets/visualizer-assets/visualizer-img-11.png";
import visualizerImg11LQIP from "../Assets/visualizer-assets/visualizer-img-11-lqip.png";
import visualizerImg12 from "../Assets/visualizer-assets/visualizer-img-12.png";
import visualizerImg12LQIP from "../Assets/visualizer-assets/visualizer-img-12-lqip.png";

import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Visualizer() {
  return (
    <section className="acc-page-general-stylings">
      <div className="focus-page-container">
        <div className="focus-body">
          <div className="focus-body-container">
            <LazyLoadImage
              src={visualizerImg1}
              placeholderSrc={visualizerImg1LQIP}
              wrapperClassName="LLI-stylings"
              effect="blur"
            />
            <LazyLoadImage
              src={visualizerImg2}
              placeholderSrc={visualizerImg2LQIP}
              wrapperClassName="LLI-stylings"
              effect="blur"
            />
            <LazyLoadImage
              src={visualizerImg3}
              placeholderSrc={visualizerImg3LQIP}
              wrapperClassName="LLI-stylings"
              effect="blur"
            />
            <LazyLoadImage
              src={visualizerImg4}
              placeholderSrc={visualizerImg4LQIP}
              wrapperClassName="LLI-stylings"
              effect="blur"
            />
            <LazyLoadImage
              src={visualizerImg5}
              lqip={visualizerImg5LQIP}
              wrapperClassName="LLI-stylings"
              effect="blur"
            />
            <LazyLoadImage
              src={visualizerImg6}
              placeholderSrc={visualizerImg6LQIP}
              wrapperClassName="LLI-stylings"
              effect="blur"
            />
            <LazyLoadImage
              src={visualizerImg7}
              placeholderSrc={visualizerImg7LQIP}
              wrapperClassName="LLI-stylings"
              effect="blur"
            />
            <LazyLoadImage
              src={visualizerImg8}
              placeholderSrc={visualizerImg8LQIP}
              wrapperClassName="LLI-stylings"
              effect="blur"
            />
            <LazyLoadImage
              src={visualizerImg9}
              placeholderSrc={visualizerImg9LQIP}
              wrapperClassName="LLI-stylings"
              effect="blur"
            />
            <LazyLoadImage
              src={visualizerImg10}
              placeholderSrc={visualizerImg10LQIP}
              wrapperClassName="LLI-stylings"
              effect="blur"
            />
            <LazyLoadImage
              src={visualizerImg11}
              placeholderSrc={visualizerImg11LQIP}
              wrapperClassName="LLI-stylings"
              effect="blur"
            />
            <LazyLoadImage
              src={visualizerImg12}
              placeholderSrc={visualizerImg12LQIP}
              wrapperClassName="LLI-stylings"
              effect="blur"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
