// styles:
import "./CaseStudy.css";
import "./Content Components/NavWindow.css";
import "react-lazy-load-image-component/src/effects/blur.css";

// imported images:
import envisionMain from "./Assets/envision-assets/Envision Top Image.png";
import envisionMainLQIP from "./Assets/envision-assets/envision-lqip.png";
import envOverviewImg from "./Assets/envision-assets/envision-overview-img.png";
import envOverviewImgLQIP from "./Assets/envision-assets/envision-overview-img-lqip.png";
import envDefineImg from "./Assets/envision-assets/envision-define-img.png";
import envDefineImgLQIP from "./Assets/envision-assets/envision-define-img-lqip.png";
import envIdeateImg1 from "./Assets/envision-assets/envision-ideate-img-1.png";
import envIdeateImg1LQIP from "./Assets/envision-assets/envision-ideate-img-1-lqip.png";
import envIdeateImg2 from "./Assets/envision-assets/envision-ideate-img-2.png";
import envIdeateImg2LQIP from "./Assets/envision-assets/envision-ideate-img-2-lqip.png";
import envDesignImg1 from "./Assets/envision-assets/envision-design-img-1.png";
import envDesignImg1LQIP from "./Assets/envision-assets/envision-design-img-1.png";
import envDesignGif1 from "./Assets/envision-assets/Envision GIF 1.gif";
import envDesignGif1LQIP from "./Assets/envision-assets/Envision GIF 1 lqip.png";
import envDesignGif2 from "./Assets/envision-assets/Envision GIF 2.gif";
import envDesignGif2LQIP from "./Assets/envision-assets/Envision GIF 2 lqip.png";
import envDesignImg4 from "./Assets/envision-assets/envision-design-img-4.png";
import envDesignImg4LQIP from "./Assets/envision-assets/envision-design-img-4.png";
import envDesignImg5 from "./Assets/envision-assets/envision-design-img-5.png";
import envDesignImg5LQIP from "./Assets/envision-assets/envision-design-img-5.png";
import envDesignGif3 from "./Assets/envision-assets/Envision GIF 3.gif";
import envDesignGif3LQIP from "./Assets/envision-assets/Envision GIF 3 lqip.png";
import envDesignImg7 from "./Assets/envision-assets/envision-design-img-7.png";
import envDesignImg7LQIP from "./Assets/envision-assets/envision-design-img-7.png";
import envDesignImg8 from "./Assets/envision-assets/envision-design-img-8.png";
import envDesignImg8LQIP from "./Assets/envision-assets/envision-design-img-8.png";
import envDesignImg9 from "./Assets/envision-assets/envision-design-img-9.png";
import envDesignImg9LQIP from "./Assets/envision-assets/envision-design-img-9.png";
import envDesignImg10 from "./Assets/envision-assets/envision-design-img-10.png";
import envDesignImg10LQIP from "./Assets/envision-assets/envision-design-img-10.png";
import envDesignImg11 from "./Assets/envision-assets/envision-design-img-11.png";
import envDesignImg11LQIP from "./Assets/envision-assets/envision-design-img-11.png";
import envDesignImg12 from "./Assets/envision-assets/envision-design-img-12.png";
import envDesignImg12LQIP from "./Assets/envision-assets/envision-design-img-12.png";

// custom components:
import Footer from "../Footer/Footer.jsx";
import Topnav from "../Topnav/Topnav.jsx";
import Header from "./Content Components/Header.jsx";
import RightNav from "./Content Components/RightNav.jsx";
import CSDWindowTitles from "./Content Components/CSDWindowTitles.jsx";
import CSLinkButton from "./Content Components/CSLinkButton.jsx";
import NavBottom from "./Content Components/NavBottom.jsx";
import { scrollToRef } from "../General/utilities.js";

// libraries:
import { useRef, useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Envision() {
  const [activeSection, setActiveSection] = useState("");
  const [isTop, setIsTop] = useState(true);

  // object with key value pairs used to set custom section threshold values (can always change it to whatever depending on section content)
  const sectionThresholds = {
    overview: [0.25, 0.75],
    empathize: [0.25, 0.75],
    define: [0.25, 1],
    ideate: [0.2],
    design: [0.035, 1],
  };

  // Create Intersection Observer instances for each section
  const observerMap = {};

  Object.keys(sectionThresholds).forEach((section) => {
    observerMap[section] = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        // used to set individual section thresholds
        root: null,
        rootMargin: "0px",
        threshold: sectionThresholds[section],
      }
    );
  });

  // Create refs for the sections you want to track
  const overviewRef = useRef(null);
  const empathizeRef = useRef(null);
  const defineRef = useRef(null);
  const ideateRef = useRef(null);
  const designRef = useRef(null);

  useEffect(() => {
    if (overviewRef.current) observerMap.overview.observe(overviewRef.current);
    if (empathizeRef.current)
      observerMap.empathize.observe(empathizeRef.current);
    if (defineRef.current) observerMap.define.observe(defineRef.current);
    if (ideateRef.current) observerMap.ideate.observe(ideateRef.current);
    if (designRef.current) observerMap.design.observe(designRef.current);

    // Clean up the observers when component unmounts
    return () => {
      Object.keys(observerMap).forEach((section) => {
        observerMap[section].disconnect();
      });
    };
  }, []);

  // handles top stylings for rightnav
  const handleScroll = () => {
    if (window.scrollY < 850) {
      setIsTop(true);
      setActiveSection("");
    } else {
      setIsTop(false);
    }
  };
  // clean up of event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Topnav />

      <div className="csd-window">
        <div className="content-space">
          <div>
            <Header
              title="Envision"
              img={envisionMain}
              lqip={envisionMainLQIP}
              text="A mobile travel planning application."
            />
          </div>

          <div ref={overviewRef} id="overview">
            <CSDWindowTitles stepNumber="00" stepName="Overview" />
            <div className="envision-overview-content">
              <div className="envision-overview-top-container">
                <div className="envision-overview-top-left-container">
                  <div className="csd-titles">Summary</div>
                  <p>
                    A user experience & mid-fidelity mobile concept ideation
                    project for UC Berkeley UX/UI Boot Camp. <br />
                    <br />
                    For this project we were tasked with building a modern-day
                    mobile app that helps people plan their next trip,
                    post-pandemic. In this assignment we focused more on the
                    user research to understand the pain points of travel
                    planning. <br />
                    <br />
                    My team and I created an app that would provide a place for
                    users to find and save recommendations promoted by people
                    they know and then build new itineraries using the recs they
                    saved.
                  </p>
                </div>
                <div className="envision-overview-top-right-container">
                  <div className="csd-titles">Timeline</div>
                  <p>3 weeks, January - February 2023</p>
                  <br />
                  <br />
                  <div className="csd-titles">My Role</div>
                  <p>
                    UX Design, Research, Prototyping, Interaction Design,
                    Usability Testing, Visual Design, Branding
                  </p>
                  <br />
                  <br />
                  <div className="csd-titles">Tools</div>
                  <p>Figma, Miro</p>
                </div>
              </div>
              <div className="envision-overview-btn-container">
                <CSLinkButton
                  buttonText="View Full Case Study"
                  linkOut="https://docs.google.com/presentation/d/1i0Fs21iWC8HzhsUqWEe2TCcjszA4CqQ8ALAs73XQplY/edit#slide=id.g7c982c4f2d_0_103"
                />
                <CSLinkButton
                  buttonText="View Prototype"
                  linkOut="https://www.figma.com/proto/cAxDHcRgymJU2mu79QHdNv/Envision-(Travel-Planning-App)?page-id=601%3A1994&type=design&node-id=1123-3003&viewport=809%2C171%2C0.15&t=tzWRtVVJRyJPmr9C-1&scaling=scale-down&starting-point-node-id=1123%3A3003&mode=design"
                />
              </div>

              <div className="envision-overview-img-container">
                <LazyLoadImage
                  src={envOverviewImg}
                  placeholderSrc={envOverviewImgLQIP}
                  wrapperClassName="LLI-stylings"
                  effect="blur"
                />
              </div>
            </div>
          </div>

          <div ref={empathizeRef} id="empathize">
            <CSDWindowTitles stepNumber="01" stepName="Empathize" />
            <div className="envision-empathize-content">
              <div className="envision-empathize-spacing">
                <div className="csd-titles">Research Approach</div>
                <p>
                  We wanted to understand how people receive, track, and use
                  travel recommendations. <br />
                  <br />
                  After conducting a screener survey with 13 participants we
                  continued further and held five 1:1 interviews to dive deeper
                  and discover more insights. <br />
                  <br />
                  We chose 5 participants that best fit our needs based on their
                  responses and interviewed them over zoom and in-person. We
                  learned that users spend large amounts of time researching
                  travel recommendations during the planning stage of their trip
                  and are often frustrated by the process.
                </p>
              </div>
              <div className="envision-empathize-spacing">
                <div className="csd-titles">Research Question</div>
                <p>
                  How do individuals acquire recommendations for travel
                  destination restaurants/activities/hotels/etc?
                </p>
              </div>
              <div className="envision-empathize-spacing">
                <div className="csd-titles">Interview Results</div>
                We Identified the following{" "}
                <span className="envision-empathize-inner-bold">insights</span>:
                <ul>
                  <li>
                    Participants note that travel recommendations are important
                    to them
                  </li>
                  <li>Researching for travel can be “tedious and annoying”</li>
                  <li>
                    They trust recommendations from the average person more than
                    an influencer or travel blogs
                  </li>
                  <li>
                    Typically spends multiple hours up to weeks planning their
                    travel itinerary
                  </li>
                </ul>
              </div>
              <div>
                <div className="csd-titles">User Insight Statement</div>
                <p>
                  Adventurous travelers who like having a travel plan need a way
                  to find reliable recommendations and efficiently track their
                  trip planning research because having a plan creates a
                  stress-free experience which allows for more exploration and
                  memory making
                </p>
              </div>
            </div>
          </div>

          <div ref={defineRef} id="define">
            <CSDWindowTitles stepNumber="02" stepName="Define" />
            <div className="envision-define-content">
              <div className="envision-define-spacing ed-container">
                <div className="csd-titles">Problem Statement</div>
                <p>
                  Adventurous travelers who like to have a plan require an
                  efficient solution to track their research and seamlessly
                  build their itineraries. The overwhelming process of
                  researching new travel destinations often scatters their
                  collected information, leading to fatigue and inefficiency.
                  They need a platform that streamlines the trip planning
                  process.
                </p>
              </div>
              <div className="envision-define-spacing ed-container">
                <div className="csd-titles">User Persona</div>
                <p>
                  Our user persona is based on our survey responses and
                  interviewees.
                  <br />
                  <br />
                  Meet Susan Jenkins. She is 32 years old, single, a college
                  professor, and lives in Monterey. She is passionate about
                  teaching her students and supporting them through both their
                  academic and personal growth. Post pandemic, Susan is
                  interested in her personal growth and wants to travel again.{" "}
                  <br />
                  <br />
                  Her goals are to explore new places, meet new people, and
                  easily access local favorites.
                </p>
              </div>

              <div className="envision-define-spacing define-img">
                <LazyLoadImage
                  src={envDefineImg}
                  placeholderSrc={envDefineImgLQIP}
                  wrapperClassName="LLI-stylings"
                  effect="blur"
                />
              </div>

              <div className="envision-define-last-container">
                <div className="csd-titles">Feature Roadmap</div>
                We used the MoSCoW method to help us determine what apps were
                vital in the success of Envision.
                <br />
                <br />
                Must Have: <br />
                <ul>
                  <li>A place to save travel research in one spot</li>
                  <li>Itinerary builder</li>
                  <li>Section for notes post experience</li>
                  <li>
                    Ability to share itinerary (via application) with friends
                  </li>
                </ul>
                <br />
                <br />
                Should Have:
                <ul>
                  <li>App to be available offline.</li>
                  <li>
                    Itineraries can be saved as PDF files to share via email or
                    print
                  </li>
                  <li>Reminders for upcoming itinerary events</li>
                  <li>
                    Ability to download and recreate other user's public
                    itineraries
                  </li>
                </ul>
                <br />
                <br />
                Would Have:
                <ul>
                  <li>
                    A point system for users that share good recommendations or
                    itineraries
                  </li>
                  <li>
                    Ability to book reservations and buy tickets through the app
                  </li>
                </ul>
                <br />
                <br />
                Could Have:
                <ul>
                  <li>Notifications for types of vaccines or visas needed</li>
                  <li>
                    Ability to join another user's plans if user set itinerary
                    to “open”
                  </li>
                  <li>
                    Provide packing recommendations based on weather for the
                    locations listed
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div ref={ideateRef} id="ideate">
            <CSDWindowTitles stepNumber="03" stepName="Ideate" />
            <div className="envision-ideate-content">
              <div className="envision-ideate-spacing ei-container">
                <div className="csd-titles">Gain Confidence</div>
                <p>
                  My team took part in an brainstorming session to generate and
                  sketch our solutions. <br />
                  <br />
                  During our user interviews we found that many people use a
                  combination of TikTok, Instagram, Google Docs, and a trip
                  planning app (such as Expedia, Trip Advisor, or Trip it). Many
                  users do this because each app offers a feature necessary to
                  trip planning - brainstorming, saving and sorting ideas,
                  itinerary building, and sharing with friends. So we wanted to
                  create an app that combines all those features to streamline
                  the process for users. <br />
                  <br />
                  After our collaborative session we progressed to creating our
                  low-fidelity prototype.
                </p>
              </div>
              <div className="envision-ideate-spacing">
                <div className="csd-titles">Our goals</div>
                <p>
                  How might we design an intuitive and user-friendly digital
                  platform that empowers travelers to seamlessly streamline
                  their trip planning process, consolidate their research, and
                  build comprehensive itineraries effortlessly?
                </p>
              </div>
              <div className="envision-ideate-spacing ideate-img">
                <LazyLoadImage
                  src={envIdeateImg1}
                  placeholderSrc={envIdeateImg1LQIP}
                  wrapperClassName="LLI-stylings"
                  effect="blur"
                />
              </div>
              <div className="envision-ideate-spacing">
                <div className="csd-titles">Low-Fidelity Prototype Testing</div>
                <p>
                  During the low-fidelity prototype usability test, we engaged
                  four participants to assess our app's overall usability,
                  intuitiveness, and user-friendliness. <br />
                  <br />
                  The feedback we gathered from this round of testing proved
                  invaluable, shedding light on the effectiveness of our design.
                  Among the key takeaways, participants emphasized the need for
                  itinerary icons to stand out more prominently, the inclusion
                  of an onboarding tutorial, and addressing general safety
                  concerns related to public itineraries. <br />
                  <br />
                  While the majority of our participants navigated through the
                  testing successfully, we remain committed to optimizing the
                  user experience and achieve our design goals.
                </p>
              </div>
              <div className="ideate-img">
                <LazyLoadImage
                  src={envIdeateImg2}
                  placeholderSrc={envIdeateImg2LQIP}
                  wrapperClassName="LLI-stylings"
                  effect="blur"
                />
              </div>
            </div>
          </div>

          <div ref={designRef} id="design">
            <CSDWindowTitles stepNumber="04" stepName="Design" />
            <div className="envision-design-content">
              <div className="envision-design-spacing">
                <LazyLoadImage
                  src={envDesignImg1}
                  placeholderSrc={envDesignImg1LQIP}
                  wrapperClassName="LLI-stylings"
                  effect="blur"
                />
              </div>
              <div className="envision-design-spacing ed2-container-top">
                <div className="csd-titles">High Fidelity Prototype</div>
                <p>
                  Building upon insights from low-fidelity usability tests, we
                  refined our design, targeting specific areas for improvement.
                  The feedback collected during these tests continued to guide
                  our decision-making throughout the mid-fidelity development
                  phase.
                  <br />
                  <br />
                  Intrigued by the opportunity to elevate Envision into a
                  polished and refined product, this project extended beyond its
                  original scope of mid-fidelity. I took the initiative to
                  further develop Envision, crafting a high-fidelity prototype
                  that captures its potential.
                </p>
              </div>
              <div>
                <LazyLoadImage
                  img={envDesignGif1}
                  lqip={envDesignGif1LQIP}
                  wrapperClassName="LLI-stylings"
                  effect="blur"
                />
              </div>
              <div className="envision-design-img-tray">
                src
                <LazyLoadImage
                  src={envDesignGif2}
                  placeholderSrc={envDesignGif2LQIP}
                  wrapperClassName="LLI-stylings"
                  effect="blur"
                />
                <LazyLoadImage
                  src={envDesignImg4}
                  placeholderSrc={envDesignImg4LQIP}
                  wrapperClassName="LLI-stylings"
                  effect="blur"
                />
                <LazyLoadImage
                  src={envDesignImg5}
                  placeholderSrc={envDesignImg5LQIP}
                  wrapperClassName="LLI-stylings"
                  effect="blur"
                />
                <LazyLoadImage
                  src={envDesignGif3}
                  placeholderSrc={envDesignGif3LQIP}
                  wrapperClassName="LLI-stylings"
                  effect="blur"
                />
                <LazyLoadImage
                  src={envDesignImg7}
                  placeholderSrc={envDesignImg7LQIP}
                  wrapperClassName="LLI-stylings"
                  effect="blur"
                />
                <LazyLoadImage
                  src={envDesignImg8}
                  placeholderSrc={envDesignImg8LQIP}
                  wrapperClassName="LLI-stylings"
                  effect="blur"
                />
                <LazyLoadImage
                  src={envDesignImg9}
                  placeholderSrc={envDesignImg9LQIP}
                  wrapperClassName="LLI-stylings"
                  effect="blur"
                />
                <LazyLoadImage
                  src={envDesignImg10}
                  placeholderSrc={envDesignImg10LQIP}
                  wrapperClassName="LLI-stylings"
                  effect="blur"
                />
                <LazyLoadImage
                  src={envDesignImg11}
                  placeholderSrc={envDesignImg11LQIP}
                  wrapperClassName="LLI-stylings"
                  effect="blur"
                />
              </div>
              <div className="envision-design-btn-container envision-design-spacing">
                <CSLinkButton
                  buttonText="View Prototype"
                  linkOut="https://www.figma.com/proto/cAxDHcRgymJU2mu79QHdNv/Envision-(Travel-Planning-App)?page-id=601%3A1994&type=design&node-id=1123-3003&viewport=809%2C171%2C0.15&t=tzWRtVVJRyJPmr9C-1&scaling=scale-down&starting-point-node-id=1123%3A3003&mode=design"
                />
              </div>
              <div className="envision-design-spacing ed2-container">
                <div className="csd-titles">Next Steps</div>
                <p>
                  Moving forward, the plan is to continue the development of the
                  high-fidelity version of Envision and conduct further testing
                  to iteratively refine our initial design. Additionally, I aim
                  to enhance the Envision by integrating custom illustrations to
                  replace existing icons and further develop the inbox and
                  profile functionalities.
                  <br />
                  <br />
                  With the valuable experience I've gained since completing this
                  project, I am eager to revisit Envision armed with newfound
                  knowledge and expertise, to implement improvements and elevate
                  the user experience.
                </p>
              </div>
              <div className="envision-design-spacing ed2-container">
                <div className="csd-titles">Reflections & Take-Aways</div>
                <p>
                  This was my first project for UC Berkeley UX/UI Design
                  Bootcamp. At the time, user research was new to me, making it
                  an interesting challenge. Since then, I have gained and
                  continue to acquire more knowledge and experience in the realm
                  of user-centered design.
                </p>
              </div>
              <LazyLoadImage
                src={envDesignImg12}
                placeholderSrc={envDesignImg12LQIP}
                wrapperClassName="LLI-stylings"
                effect="blur"
              />
            </div>
          </div>
        </div>

        <div className="right-nav-container">
          <RightNav
            scrollToRef={scrollToRef}
            overviewRef={overviewRef}
            empathizeRef={empathizeRef}
            defineRef={defineRef}
            ideateRef={ideateRef}
            designRef={designRef}
            activeSection={activeSection}
            isTop={isTop}
          />
        </div>
      </div>

      <NavBottom
        key="envision"
        prevText="02 Starting Over Inc."
        nextText="04 Hatch"
        prevLink="/work/starting-over-inc"
        nextLink="/work/hatch"
      />
      <Footer />
    </>
  );
}
