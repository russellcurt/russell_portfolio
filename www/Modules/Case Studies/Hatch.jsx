// styles:
import "./CaseStudy.css";
import "./Content Components/NavWindow.css";
import "react-lazy-load-image-component/src/effects/blur.css";

// imported images:
import hatImg1 from "./Assets/hatch-assets/Hatch Image 1.png";
import hatImg1LQIP from "./Assets/hatch-assets/Hatch Image 1 lqip.png";
import hatImg2 from "./Assets/hatch-assets/Hatch Image 2.png";
import hatImg2LQIP from "./Assets/hatch-assets/Hatch Image 2 lqip.png";
import hatImg3 from "./Assets/hatch-assets/Hatch Image 3.png";
import hatImg3LQIP from "./Assets/hatch-assets/Hatch Image 3 lqip.png";
import hatImg4 from "./Assets/hatch-assets/Hatch Image 4.png";
import hatImg4LQIP from "./Assets/hatch-assets/Hatch Image 4 lqip.png";
import hatImg5 from "./Assets/hatch-assets/Hatch Image 5.png";
import hatImg5LQIP from "./Assets/hatch-assets/Hatch Image 5 lqip.png";
import hatImg6 from "./Assets/hatch-assets/Hatch Image 6.png";
import hatImg6LQIP from "./Assets/hatch-assets/Hatch Image 6 lqip.png";
import hatImg7 from "./Assets/hatch-assets/Hatch Image 7.png";
import hatImg7LQIP from "./Assets/hatch-assets/Hatch Image 7 lqip.png";
import hatImg8 from "./Assets/hatch-assets/Hatch Image 8.png";
import hatImg8LQIP from "./Assets/hatch-assets/Hatch Image 8 lqip.png";
import hatImg9 from "./Assets/hatch-assets/Hatch Image 9.png";
import hatImg9LQIP from "./Assets/hatch-assets/Hatch Image 9 lqip.png";
import hatImg10 from "./Assets/hatch-assets/Hatch Image 10.png";
import hatImg10LQIP from "./Assets/hatch-assets/Hatch Image 10 lqip.png";
import hatImg11 from "./Assets/hatch-assets/Hatch Image 11.png";
import hatImg11LQIP from "./Assets/hatch-assets/Hatch Image 11 lqip.png";
import hatImg12 from "./Assets/hatch-assets/Hatch Image 12.png";
import hatImg12LQIP from "./Assets/hatch-assets/Hatch Image 12 lqip.png";
import hatImg13 from "./Assets/hatch-assets/Hatch Image 13.png";
import hatImg13LQIP from "./Assets/hatch-assets/Hatch Image 13 lqip.png";
import hatImg14 from "./Assets/hatch-assets/Hatch Image 14.png";
import hatImg14LQIP from "./Assets/hatch-assets/Hatch Image 14 lqip.png";
import hatImg15 from "./Assets/hatch-assets/Hatch Image 15.png";
import hatImg15LQIP from "./Assets/hatch-assets/Hatch Image 15 lqip.png";

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

export default function Hatch() {
  const [activeSection, setActiveSection] = useState("");
  const [isTop, setIsTop] = useState(true);

  // object with key value pairs used to set custom section threshold values (can always change it to whatever depending on section content)
  const sectionThresholds = {
    overview: [0.25, 1],
    empathize: [0.25, 0.75],
    define: [0.25, 1],
    ideate: [0.1, 1],
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
    // check if we're at top
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
              title="Hatch"
              img={hatImg1}
              lqip={hatImg1LQIP}
              text="A mobile financial planning and budgeting application."
            />
          </div>

          <div ref={overviewRef} id="overview">
            <CSDWindowTitles stepNumber="00" stepName="Overview" />
            <div className="hatch-overview-content">
              <div className="hatch-overview-spacing hatch-overview-top-container">
                <div className="hatch-overview-top-left-container">
                  <div className="csd-titles">Summary</div>
                  <p>
                    A user experience & mid-fidelity mobile concept ideation
                    project for UC Berkeley UX/UI Boot Camp.
                    <br />
                    <br />
                    For this project we were tasked to research, prototype,
                    test, and validate an idea for a brand-new mobile
                    application. With our creation must solving a real, clearly
                    identified need in users' everyday lives.
                    <br />
                    <br />
                    My team and I created an app that would help young
                    professionals take control of their spendings and savings
                    automatically so they can reduce budget management stress,
                    and help create and achieve realistic savings goals.
                  </p>
                </div>
                <div className="hatch-overview-top-right-container">
                  <div className="csd-titles">Timeline</div>
                  <p>3 weeks, January - February 2023</p>
                  <br />
                  <br />
                  <div className="csd-titles">My Role</div>
                  <p>
                    UX + UI Design, Research, Branding, Prototyping, Interaction
                    Design, Usability Testing, Visual Design
                  </p>
                  <br />
                  <br />
                  <div className="csd-titles">Tools</div>
                  <p>Figma, Miro</p>
                </div>
              </div>
              <div className="hatch-overview-spacing hatch-overview-btn-container">
                <CSLinkButton buttonText="View Full Case Study" />
                <CSLinkButton buttonText="View Prototype" />
              </div>
              <LazyLoadImage
                src={hatImg2}
                placeholderSrc={hatImg2LQIP}
                wrapperClassName="LLI-stylings"
                effect="blur"
              />
            </div>
          </div>

          <div ref={empathizeRef} id="empathize">
            <CSDWindowTitles stepNumber="01" stepName="Empathize" />
            <div className="hatch-empathize-content">
              <div className="hatch-empathize-spacing">
                <div className="csd-titles">Research Approach</div>
                <p>
                  Our objective was to gain insight into the financial planning
                  habits of young professionals. Through our research, we sought
                  to understand the resources they currently utilize and find
                  effective ways to communicate complex financial concepts to
                  this audience.
                  <br />
                  <br />
                  After conducting a screener survey with 18 participants we
                  continued further and held five 1:1 interviews to dive deeper
                  and discover more insights.
                  <br />
                  <br />
                  We chose 5 participants that best fit our needs based on their
                  responses and interviewed them over zoom and in-person.
                  Through these interviews, we discovered how they manage their
                  finances and budget their daily lives.
                </p>
              </div>
              <div className="hatch-empathize-spacing">
                <div className="csd-titles">Research Question</div>
                <p>
                  How do young professionals currently approach financial
                  planning?
                </p>
              </div>
              <div className="hatch-empathize-spacing">
                <div className="csd-titles">Interview Results</div>
                <p>
                  We identified the following{" "}
                  <span className="hatch-empathize-inner-bold">insights</span>:
                </p>
                <ul>
                  <li>
                    Participants don't feel the need to have professionals for
                    their financial planning
                  </li>
                  <li>Desires to learn and setup good financial habits</li>
                  <li>Budgeting and financial planning are mentally tasking</li>
                </ul>
              </div>
              <div className="csd-titles">User Insight Statement</div>
              <p>
                Young professionals who are learning to manage their personal
                finances often struggle because the process is time consuming
                and feels daunting. This makes it challenging for them to create
                and maintain good budgeting habits.
              </p>
            </div>
          </div>

          <div ref={defineRef} id="define">
            <CSDWindowTitles stepNumber="02" stepName="Define" />
            <div className="hatch-define-content">
              <div className="hatch-define-spacing">
                <div className="csd-titles">Problem Statement</div>
                <p>
                  Many young professionals struggle to create good saving habits
                  and maintain their budget. To overcome this they need a way to
                  make financial planning and budgeting simple and easy,
                  allowing them to save more and achieve financial stability.
                </p>
              </div>
              <div className="hatch-define-spacing">
                <div className="csd-titles">User Persona</div>
                <p>
                  Our user persona is based on our survey responses and
                  interviewees.
                  <br />
                  <br />
                  Meet Ashley Sands. She is 26 years old, single, a recent
                  college graduate, and lives in Austin. She just started her
                  first job and is wanting to create a retirement account. And
                  someday, Ashley wants to own her own home as her parents
                  taught her the importance of financial responsibility.
                  <br />
                  <br />
                  Her goals are to create financial goals she feels confident
                  in, reach financial stability, and ultimately save money.
                </p>
              </div>
              <div className="hatch-define-spacing">
                <LazyLoadImage
                  src={hatImg3}
                  placeholderSrc={hatImg3LQIP}
                  wrapperClassName="LLI-stylings"
                  effect="blur"
                />
              </div>
              <div className="hatch-define-spacing">
                <div className="csd-titles">Competitor Analysis</div>
                <p>
                  Our analysis involved examining several competitors in the
                  financial planning app market, including Copilot, Nudget, Nerd
                  Wallet, Mint, and Rocket Money. During this evaluation, we
                  recognized the importance of striking a balance between a
                  streamlined experience and a simple, approachable feel in
                  Hatch's design.
                  <br />
                  <br />
                  We observed that many existing apps in this market tend to
                  overwhelm users due to the complexity of financial matters and
                  an abundance of features and options. For Hatch, our goal is
                  to create an app that stands out by offering a more intuitive
                  and user-friendly approach to financial planning.
                  <br />
                  <br />
                  By studying the strengths and weaknesses of our competitors,
                  we aim to position Hatch as the go-to solution for young
                  professionals seeking a hassle-free way to manage their
                  finances and build strong budgeting habits.
                </p>
              </div>
              <div className="csd-titles">Feature Roadmap</div>
              <p>
                Our app's development prioritized the following features
                designed to cater to the requirements of young professionals in
                managing their personal finances efficiently:
              </p>
              <ul>
                <li>
                  Personalized Budgeting: Empower users with the flexibility to
                  customize their budgets and saving goals, allowing them to
                  adapt their financial plans as needed.
                </li>
                <li>
                  Real-time Updates: Provide users with peace of mind by
                  automatically updating budgets and saving goals in real-time,
                  reflecting their transactions, withdrawals, or deposits
                  promptly.
                </li>
                <li>
                  Smart Budgeting Assistance: Deliver intelligent and
                  personalized suggestions for smart budgeting, analyzing
                  individual saving and spending habits to offer tailored
                  financial guidance.
                </li>
              </ul>
            </div>
          </div>

          <div ref={ideateRef} id="ideate">
            <CSDWindowTitles stepNumber="03" stepName="Ideate" />
            <div className="hatch-ideate-content">
              <div className="hatch-ideate-spacing">
                <div className="csd-titles">Gain Confidence</div>
                <p>
                  My team began with a collaborative brainstorming session,
                  where we engaged in discussions to generate and sketch
                  potential solutions for our app.
                  <br />
                  <br />
                  Through user interviews, we gained valuable insights into the
                  preferences and needs of our target users. This enlightening
                  experience helped us refine our vision and align our focus
                  towards key aspects of customization, automation, and
                  simplicity.
                  <br />
                  <br />
                  With these insights, we embarked on the creation of our
                  low-fidelity prototype, laying the foundation for our app's
                  development and iterative design process.
                </p>
              </div>
              <div className="hatch-ideate-spacing">
                <div className="csd-titles">Our Goals</div>
                <p>
                  How might we create an intuitive app that simplifies financial
                  planning for young professionals, empowering them to
                  effortlessly build budgeting habits, save consistently, and
                  achieve financial stability?
                </p>
              </div>
              <div className="hatch-ideate-spacing hatch-ideate-img-tray">
                <LazyLoadImage
                  src={hatImg4}
                  placeholderSrc={hatImg4LQIP}
                  wrapperClassName="LLI-stylings"
                  effect="blur"
                />
                <LazyLoadImage
                  src={hatImg5}
                  placeholderSrc={hatImg5LQIP}
                  wrapperClassName="LLI-stylings"
                  effect="blur"
                />
              </div>
              <div className="hatch-ideate-spacing">
                <div className="csd-titles">Low-Fidelity Prototype Testing</div>
                <p>
                  During the low-fidelity prototype usability test, we engaged
                  four participants to assess our app's overall usability,
                  intuitiveness, and user-friendliness.
                  <br />
                  <br />
                  The feedback we gathered from this round of testing proved
                  invaluable, shedding light on the effectiveness of our design.
                  Among the key takeaways, participants emphasized the need for
                  itinerary icons to stand out more prominently, the inclusion
                  of an onboarding tutorial, and addressing general safety
                  concerns related to public itineraries.
                  <br />
                  <br />
                  While the majority of our participants navigated through the
                  testing successfully, we remain committed to optimizing the
                  user experience and achieve our design goals.
                </p>
              </div>
              <LazyLoadImage
                src={hatImg6}
                placeholderSrc={hatImg6LQIP}
                wrapperClassName="LLI-stylings"
                effect="blur"
              />
            </div>
          </div>

          <div ref={designRef} id="design">
            <CSDWindowTitles stepNumber="04" stepName="Design" />
            <div className="hatch-design-content">
              <div className="hatch-design-spacing">
                <LazyLoadImage
                  src={hatImg2}
                  placeholderSrc={hatImg2LQIP}
                  wrapperClassName="LLI-stylings"
                  effect="blur"
                />
              </div>
              <div className="hatch-design-spacing">
                <div className="csd-titles">High Fidelity Prototype</div>
                <p>
                  Guided by insights from low-fidelity usability tests, we
                  iteratively refined our design, addressing specific areas for
                  improvement. The feedback gathered during these tests served
                  as a compass throughout the development of the mid-fidelity
                  prototype.
                  <br />
                  <br />
                  Progressing further than the initial project scope, I later
                  revisited the design to push beyond mid-fidelity constraints.
                  This led me to develop a high-fidelity prototype, embodying
                  Hatch's full potential.
                </p>
              </div>
              <div className="hatch-design-spacing hatch-design-img-tray">
                <LazyLoadImage
                  src={hatImg7}
                  placeholderSrc={hatImg7LQIP}
                  wrapperClassName="LLI-stylings"
                  effect="blur"
                />
                <LazyLoadImage
                  src={hatImg8}
                  placeholderSrc={hatImg8LQIP}
                  wrapperClassName="LLI-stylings"
                  effect="blur"
                />
                <LazyLoadImage
                  src={hatImg9}
                  placeholderSrc={hatImg9LQIP}
                  wrapperClassName="LLI-stylings"
                  effect="blur"
                />
                <LazyLoadImage
                  src={hatImg10}
                  placeholderSrc={hatImg10LQIP}
                  wrapperClassName="LLI-stylings"
                  effect="blur"
                />
                <LazyLoadImage
                  src={hatImg11}
                  placeholderSrc={hatImg11LQIP}
                  wrapperClassName="LLI-stylings"
                  effect="blur"
                />
                <LazyLoadImage
                  src={hatImg12}
                  placeholderSrc={hatImg12LQIP}
                  wrapperClassName="LLI-stylings"
                  effect="blur"
                />
                <LazyLoadImage
                  src={hatImg13}
                  placeholderSrc={hatImg13LQIP}
                  wrapperClassName="LLI-stylings"
                  effect="blur"
                />
                <LazyLoadImage
                  src={hatImg14}
                  placeholderSrc={hatImg14LQIP}
                  wrapperClassName="LLI-stylings"
                  effect="blur"
                />
              </div>
              <div className="hatch-design-spacing hatch-design-btn-container">
                <CSLinkButton buttonText="View Prototype" />
              </div>
              <div className="hatch-design-spacing">
                <div className="csd-titles">Next Steps</div>
                <p>
                  Looking ahead, the next phase involves advancing the
                  development of the high-fidelity version of Hatch and
                  conducting iterative testing to refine our initial design.
                  <br />
                  <br />
                  Having gained valuable experience since completing this
                  project, I am eager to revisit Hatch armed with newfound
                  knowledge and expertise, ready to implement enhancements and
                  elevate the overall user experience.
                </p>
              </div>
              <div className="hatch-design-spacing">
                <div className="csd-titles">Reflections & Take-aways</div>
                <p>
                  This was my second project for UC Berkeley UX/UI Design
                  Bootcamp. Focusing on the UX design process challenged me to
                  think critically and strategically about design decisions and
                  the impact they have on the user experience.
                </p>
              </div>
              <LazyLoadImage
                src={hatImg15}
                placeholderSrc={hatImg15LQIP}
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
        key="hatch"
        prevText="03 Envision"
        nextText="05 FDA"
        prevLink="/russell_portfolio/work/envision"
        nextLink="/russell_portfolio/work/fda"
      />
      <Footer />
    </>
  );
}
