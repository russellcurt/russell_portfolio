// styles:
import "./CaseStudy.css";
import "./Content Components/NavWindow.css";
import "react-lazy-load-image-component/src/effects/blur.css";

// imported images:
import soi_Img1 from "./Assets/starting-over-inc-assets/SOI_Image 1.png";
import soi_Img1LQIP from "./Assets/starting-over-inc-assets/SOI_Image 1 lqip.png";
import soi_Img2 from "./Assets/starting-over-inc-assets/SOI_Image 2.png";
import soi_Img2LQIP from "./Assets/starting-over-inc-assets/SOI_Image 2 lqip.png";
import soi_Img3 from "./Assets/starting-over-inc-assets/SOI_Image 3.png";
import soi_Img3LQIP from "./Assets/starting-over-inc-assets/SOI_Image 3 lqip.png";
import soi_Img4 from "./Assets/starting-over-inc-assets/SOI_Image 4.png";
import soi_Img4LQIP from "./Assets/starting-over-inc-assets/SOI_Image 4 lqip.png";
import soi_Img5 from "./Assets/starting-over-inc-assets/SOI_Image 5.png";
import soi_Img5LQIP from "./Assets/starting-over-inc-assets/SOI_Image 5 lqip.png";
import soi_Img6 from "./Assets/starting-over-inc-assets/SOI_Image 6.png";
import soi_Img6LQIP from "./Assets/starting-over-inc-assets/SOI_Image 6 lqip.png";
import soi_Img7 from "./Assets/starting-over-inc-assets/SOI_Image 7.png";
import soi_Img7LQIP from "./Assets/starting-over-inc-assets/SOI_Image 7 lqip.png";
import soi_Img8 from "./Assets/starting-over-inc-assets/SOI_Image 8.png";
import soi_Img8LQIP from "./Assets/starting-over-inc-assets/SOI_Image 8 lqip.png";
import soi_Img9 from "./Assets/starting-over-inc-assets/SOI_Image 9.png";
import soi_Img9LQIP from "./Assets/starting-over-inc-assets/SOI_Image 9 lqip.png";
import soi_Img10 from "./Assets/starting-over-inc-assets/SOI_Image 10.png";
import soi_Img10LQIP from "./Assets/starting-over-inc-assets/SOI_Image 10 lqip.png";
import soi_Img11 from "./Assets/starting-over-inc-assets/SOI_Image 11.png";
import soi_Img11LQIP from "./Assets/starting-over-inc-assets/SOI_Image 11 lqip.png";
import soi_Img12 from "./Assets/starting-over-inc-assets/SOI_Image 12.png";
import soi_Img12LQIP from "./Assets/starting-over-inc-assets/SOI_Image 12 lqip.png";
import soi_Img13 from "./Assets/starting-over-inc-assets/SOI_Image 13.png";
import soi_Img13LQIP from "./Assets/starting-over-inc-assets/SOI_Image 13 lqip.png";
import soi_Img14 from "./Assets/starting-over-inc-assets/SOI_Image 14.png";
import soi_Img14LQIP from "./Assets/starting-over-inc-assets/SOI_Image 14 lqip.png";
import soi_Img15 from "./Assets/starting-over-inc-assets/SOI_Image 15.png";
import soi_Img15LQIP from "./Assets/starting-over-inc-assets/SOI_Image 15 lqip.png";
import soi_Img16 from "./Assets/starting-over-inc-assets/SOI_Image 16.png";
import soi_Img16LQIP from "./Assets/starting-over-inc-assets/SOI_Image 16 lqip.png";

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

export default function StartingOverInc() {
  const [activeSection, setActiveSection] = useState("");
  const [isTop, setIsTop] = useState(true);

  // object with key value pairs used to set custom section threshold values (can always change it to whatever depending on section content)
  const sectionThresholds = {
    overview: [0.25, 0.75],
    empathize: [0.25, 0.75],
    define: [0.25, 1],
    ideate: [0.2, 1],
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
  // clean up event listener
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
              title="Starting Over Inc."
              img={soi_Img1}
              lqip={soi_Img1LQIP}
              text="Website redesign for local nonprofit organization."
            />
          </div>

          <div ref={overviewRef} id="overview">
            <CSDWindowTitles stepNumber="00" stepName="Overview" />
            <div className="soi-overview-content">
              <div className="soi-overview-spacing soi-overview-top-container">
                <div className="soi-overview-top-left-container">
                  <div className="csd-titles">Summary</div>
                  <p>
                    A website redesign project for UC Berkeley UX/UI Boot Camp.
                    <br />
                    <br />
                    For this project we were tasked with selecting a nonprofit
                    organization and redesigning their mobile and desktop web
                    solutions.
                    <br />
                    <br />
                    Starting Over Inc. is a nonprofit organization located in
                    East Los Angeles, CA that aims to empower previously
                    incarcerated individuals through re-entry services,
                    including family reunification, transitional housing, and
                    legal aid. Their dedication to facilitating successful
                    reintegration into society also extends to supporting
                    homeless individuals, guiding them through the journey from
                    homelessness while working to break the cycles of poverty,
                    substance abuse, mental illness, and recidivism.
                    <br />
                    <br />
                    We chose Starting Over Inc. due to their commitment to
                    uplifting and empowering communities in Los Angeles while
                    actively addressing destructive policies and advocating for
                    meaningful change.
                    <br />
                    <br />
                    My team and I aimed to develop a responsive high-fidelity
                    web redesign that caters to our stakeholder and client's
                    needs while adhering to their established branding.
                  </p>
                </div>
                <div className="soi-overview-top-right-container">
                  <div className="csd-titles">Timeline</div>
                  <p>3 weeks, April - May 2023</p> <br />
                  <div className="csd-titles">My Role</div>
                  <p>
                    UX + UI Design, Research, Prototyping, Usability Testing,
                    Visual Design
                  </p>
                  <br />
                  <div className="csd-titles">Client & Stakeholder</div>
                  <p>
                    Starting Over Inc./Emma Li (Media & Communication
                    Specialist)
                  </p>
                  <br />
                  <div className="csd-titles">Tools</div>
                  <p>Figma, Trello</p>
                </div>
              </div>
              <div className="soi-overview-spacing soi-overview-btn-container">
                <CSLinkButton
                  buttonText="View Full Case Study"
                  linkOut="https://docs.google.com/presentation/d/1qlaElIvIcziKxhi-3nLsTBSfMX5KI8hM6NQI6eXyeY4/edit?usp=sharing"
                />
                <CSLinkButton
                  buttonText="View Prototype"
                  linkOut="https://www.figma.com/file/7Ajjjr9AYRKwc00H62Wn9z/Starting-Over-Inc.-Redesign-Prototypes?type=design&node-id=1101%3A13519&mode=design&t=Z1IavTNAORoocmps-1"
                />
              </div>
              <LazyLoadImage
                src={soi_Img2}
                placeholderSrc={soi_Img2LQIP}
                wrapperClassName="LLI-stylings"
                effect="blur"
              />
            </div>
          </div>

          <div ref={empathizeRef} id="empathize">
            <CSDWindowTitles stepNumber="01" stepName="Empathize" />
            <div className="soi-empathize-content">
              <div className="soi-empathize-spacing">
                <div className="csd-titles">Stakeholder Interview</div>
                <p>
                  To gain in-depth insights into Starting Over's mission and how
                  the organization uses their own website, we crafted a series
                  of questions for a one-on-one virtual interview with our
                  stakeholder, Emma Li.
                  <br />
                  <br />
                  Her feedback revealed a clear focus on enhancing the
                  accessibility of Starting Over's services. Additionally, she
                  emphasized the importance of revamping the home and events
                  pages to create a more appealing experience for both donors
                  and individuals seeking assistance.
                  <br />
                  <br />
                  <span className="soi-empathize-inner-italic">
                    “We want them to learn what Starting Over can provide for
                    them and what we are about” - Emma
                  </span>
                </p>
              </div>
              <div className="soi-empathize-spacing">
                <div className="csd-titles">Research Challenges</div>
                <p>
                  Throughout the stakeholder interview, we inquired about user
                  feedback and website performance data for Starting Over's
                  website. Unfortunately, no previous user testing or data
                  collection had been conducted by Starting Over Inc. Given this
                  limitation, we adapted our redesign approach, drawing upon our
                  collective UI expertise, guerrilla testing findings, and
                  careful consideration of stakeholder needs.
                </p>
              </div>
              <div className="soi-empathize-spacing">
                <div className="csd-titles">Usability Testing & Insights</div>
                <p>
                  Conducting 5 virtual one-on-one user tests, we tasked
                  participants with specific activities to evaluate the
                  website's usability.
                  <br />
                  <br />
                  During our initial testing phase, we observed the following
                  insights:
                </p>
                <ol>
                  <li>
                    Confusing Navigation: Participants encountered difficulties
                    in locating Starting Over's services due to the website's
                    navigation being unclear and challenging to navigate.
                  </li>
                  <li>
                    Text Overlay Issues: Users experienced difficulties reading
                    text overlays on images, causing strain on their eyes and
                    hindering content comprehension.
                  </li>
                  <li>
                    Low Color Contrast for the Logo: The logo's low color
                    contrast made it difficult for users to see and read,
                    impacting the brand's recognition and visual appeal."
                  </li>
                </ol>
              </div>
              <div className="csd-titles">Design Opportunities</div>
              <p>
                Throughout our assessment, we identified several design
                opportunities to enhance the website's information architecture
                and user interface.
                <br />
                <br />
                Information Architecture Redesign: The primary focus of the
                information architecture redesign was to restructure content by
                elevating high-priority actionable information. Notably, we
                placed transitional housing applications in more prominent and
                accessible locations, streamlining the user journey.
                <br />
                <br />
                User Interface Redesign: For the user interface, we aimed to
                retain the existing content while elevating the visual appeal
                and functionality. Our redesign focused on improving graphics
                and interactive elements, resulting in a more engaging and
                user-friendly experience."
              </p>
            </div>
          </div>

          <div ref={defineRef} id="define">
            <CSDWindowTitles stepNumber="02" stepName="Define" />
            <div className="soi-define-content">
              <div className="soi-define-spacing">
                <div className="csd-titles">Problem Statement</div>
                <p>
                  The Starting Over Inc. website needs to clarify its site map
                  and navigation to facilitate content discovery and enable
                  different audience groups to easily find relevant
                  opportunities.
                </p>
              </div>
              <div className="soi-define-spacing">
                <div className="csd-titles">User Persona</div>
                <p>
                  Drawing insights from our stakeholder interview and thorough
                  research, we developed user personas for both participants and
                  volunteers.
                  <br />
                  <br />
                  Given Starting Over's service to multiple audiences, it became
                  imperative to identify and comprehend the unique needs of each
                  core user base. This understanding allows us to ensure that
                  the information presented on the website seamlessly aligns
                  with the expectations and requirements of each audience.
                </p>
              </div>
              <div className="soi-define-spacing">
                <LazyLoadImage
                  src={soi_Img3}
                  placeholderSrc={soi_Img3LQIP}
                  wrapperClassName="LLI-stylings"
                  effect="blur"
                />
              </div>
              <div className="csd-titles">Improvements</div>
              <p>
                During our heuristic evaluation, we identified key areas for
                improvement on Starting Over's website, including:
              </p>
              <ol>
                <li>
                  Enhancing UI Consistency: Ensuring uniformity in text,
                  spacing, margins, and images throughout the website to create
                  a cohesive and user-friendly experience.
                </li>
                <li>
                  Addressing Color Contrast: Improving color contrast to enhance
                  readability and ensure better accessibility for all users.
                </li>
                <li>
                  Optimizing Navigation and Fixing Broken Links: Enhancing the
                  functionality of navigation elements and resolving any broken
                  links to provide a seamless browsing experience.
                </li>
                <li>
                  Restructuring Information Architecture and Hierarchy:
                  Emphasizing the most crucial information through proper
                  information architecture and hierarchy restructuring for
                  enhanced user comprehension.
                </li>
                <li>
                  Enhancing Findability: Improving content discoverability,
                  enabling users to locate information effortlessly.
                </li>
                <li>
                  Improving Interactive Elements: Enhancing the usability of
                  interactive elements, such as drop-down menus, forms, and
                  calendar pickers, to provide a smoother and more engaging user
                  experience.
                </li>
              </ol>
            </div>
          </div>

          <div ref={ideateRef} id="ideate">
            <CSDWindowTitles stepNumber="03" stepName="Ideate" />
            <div className="soi-ideate-content">
              <div className="soi-ideate-spacing">
                <div className="csd-titles">Gain Confidence</div>
                <p>
                  After gathering our research findings, my team engaged in a
                  brainstorming session to sketch improvements for the website
                  redesign. Our primary objective was to align the website
                  design with the social needs and solutions provided by
                  Starting Over while fostering active engagement from their
                  audience.
                  <br />
                  <br />
                  We prioritized restructuring content to ensure it was useful
                  and easily discoverable, evoking a sense of community,
                  trustworthiness, and growth thematically. Most importantly, we
                  focused on functional and useful content, enabling users to
                  take immediate action.
                  <br />
                  <br />
                  Creating an initial layout using a low-fi prototype was
                  crucial to address foundational inefficiencies on the existing
                  site. By standardizing spacing, margins, and text sizing and
                  grouping elements cohesively, we established a visual format
                  that enhances information discovery, readability, and user
                  interactions.
                </p>
              </div>
              <div className="soi-ideate-spacing">
                <div className="csd-titles">Our Goals</div>
                <p>
                  How might we create an intuitive website navigation and user
                  experience that empowers diverse audience groups, making it
                  effortless for them to access and engage with Starting Over's
                  services and mission?
                </p>
              </div>
              <div className="soi-ideate-spacing">
                <LazyLoadImage
                  src={soi_Img4}
                  placeholderSrc={soi_Img4LQIP}
                  wrapperClassName="LLI-stylings"
                  effect="blur"
                />
              </div>
              <div className="soi-ideate-spacing">
                <div className="csd-titles">Low-Fidelity Prototype Testing</div>
                <p>
                  We conducted a low-fidelity prototype usability test with five
                  participants, aiming to refine our design and enhance content
                  discovery and active engagement with Starting Over's audience.
                  This testing phase played a crucial role in our design
                  process, providing valuable insights for identifying areas of
                  improvement.
                  <br />
                  <br />
                  From this round of testing, we gained valuable feedback on the
                  effectiveness of our design, highlighting both successful
                  aspects and opportunities for enhancement. Particularly, we
                  recognized the need to further reorganize the website to
                  increase accessibility to important content and improve the
                  visibility of major call-to-action buttons.
                  <br />
                  <br />
                  While the majority of our participants navigated through the
                  testing successfully, we remain committed to exploring ways to
                  optimize the user experience and achieve our design goals.
                </p>
              </div>
              <div className="soi-ideate-img-tray">
                <LazyLoadImage
                  src={soi_Img5}
                  placeholderSrc={soi_Img5LQIP}
                  wrapperClassName="LLI-stylings"
                  effect="blur"
                />
                <LazyLoadImage
                  src={soi_Img6}
                  placeholderSrc={soi_Img6LQIP}
                  wrapperClassName="LLI-stylings"
                  effect="blur"
                />
              </div>
            </div>
          </div>

          <div ref={designRef} id="design">
            <CSDWindowTitles stepNumber="04" stepName="Design" />
            <div className="soi-design-content">
              <div className="soi-design-spacing">
                <LazyLoadImage
                  src={soi_Img7}
                  placeholderSrc={soi_Img7LQIP}
                  wrapperClassName="LLI-stylings"
                  effect="blur"
                />
              </div>
              <div className="soi-design-spacing">
                <div className="csd-titles">High Fidelity Prototype</div>
                <p>
                  Building upon insights from low-fidelity usability tests, we
                  refined our design, targeting specific areas for improvement.
                  The feedback collected during these tests continued to guide
                  our decision-making all the way through into the High-fidelity
                  development phase.
                </p>
              </div>
              <div className="soi-design-spacing">
                <div className="csd-titles">
                  Incorporating Participant Feedback
                </div>
                <p>
                  Drawing from the valuable insights gained during user testing,
                  we made dedicated efforts to address the challenges
                  encountered in the website's navigation and user interface.
                  The navigation bar underwent updates with a revised naming
                  convention, and the site map was enhanced by adding a
                  drop-down menu for programs and projects, unearthing the
                  organization's services and making them more easily
                  accessible.
                </p>
              </div>
              <div className="soi-design-spacing">
                <div className="csd-titles">Enhancing The User Experience</div>
                <p>
                  Throughout the redesign process, we sought to improve Starting
                  Over's website with a fresh logo design and a clean aesthetic
                  while preserving its core theme of "starting over." Staying
                  true to the organization's values, we maintained the original
                  green palette, symbolizing growth and trustworthiness, and
                  introduced contrasting highlights with the addition of an
                  orange accent. Through carefully selected imagery, we
                  portrayed the essence of Starting Over, showcasing real people
                  and the meaningful work they do, reinforcing the
                  organization's mission.
                </p>
              </div>
              <div className="soi-design-spacing soi-design-img-tray">
                <LazyLoadImage
                  src={soi_Img8}
                  placeholderSrc={soi_Img8LQIP}
                  wrapperClassName="LLI-stylings"
                  effect="blur"
                />
                <LazyLoadImage
                  src={soi_Img9}
                  placeholderSrc={soi_Img9LQIP}
                  wrapperClassName="LLI-stylings"
                  effect="blur"
                />
                <LazyLoadImage
                  src={soi_Img10}
                  placeholderSrc={soi_Img10LQIP}
                  wrapperClassName="LLI-stylings"
                  effect="blur"
                />
                <LazyLoadImage
                  src={soi_Img11}
                  placeholderSrc={soi_Img11LQIP}
                  wrapperClassName="LLI-stylings"
                  effect="blur"
                />
                <LazyLoadImage
                  src={soi_Img12}
                  placeholderSrc={soi_Img12LQIP}
                  wrapperClassName="LLI-stylings"
                  effect="blur"
                />
                <LazyLoadImage
                  src={soi_Img13}
                  placeholderSrc={soi_Img13LQIP}
                  wrapperClassName="LLI-stylings"
                  effect="blur"
                />
                <LazyLoadImage
                  src={soi_Img14}
                  placeholderSrc={soi_Img14LQIP}
                  wrapperClassName="LLI-stylings"
                  effect="blur"
                />
                <LazyLoadImage
                  src={soi_Img15}
                  placeholderSrc={soi_Img15LQIP}
                  wrapperClassName="LLI-stylings"
                  placeholderSrceffect="blur"
                />
              </div>
              <div className="soi-design-spacing soi-design-btn-container">
                <CSLinkButton
                  buttonText="View Prototype"
                  linkOut="https://www.figma.com/file/7Ajjjr9AYRKwc00H62Wn9z/Starting-Over-Inc.-Redesign-Prototypes?type=design&node-id=1101%3A13519&mode=design&t=Z1IavTNAORoocmps-1"
                />
              </div>
              <div className="soi-design-spacing">
                <div className="csd-titles">Iterations</div>
                <p>
                  Incorporating user-centered design principles, we iteratively
                  refined the website's layout, organization, and hierarchy
                  based on participant feedback. By prioritizing user needs and
                  preferences, we aimed to create a user-friendly and accessible
                  website. The iterative design process played a pivotal role in
                  shaping our comprehensive high-fidelity prototype, ensuring
                  that Starting Over's website provides a seamless and engaging
                  experience for its diverse audience.
                  <br />
                  <br />
                  With the dedication to improve content discoverability and
                  encourage active engagement, our redesigned website reflects
                  Starting Over's commitment to empowering their community. By
                  staying true to the organization's core mission while
                  implementing user-focused enhancements, we are confident that
                  our final product aligns seamlessly with Starting Over's
                  vision to support those seeking to rebuild their lives.
                </p>
              </div>
              <div className="soi-design-spacing">
                <div className="csd-titles">Next Steps</div>
                <p>
                  In the coming phase, we plan to conduct further iterations on
                  our website redesign and present our refined prototype to the
                  Starting Over Inc. staff for their valuable feedback.
                  Additionally, we aim to incorporate a short user survey to
                  assess the satisfaction of Starting Over users with the
                  improved website experience.
                </p>
              </div>
              <div className="soi-design-spacing">
                <div className="csd-titles">Reflections & Take-aways</div>
                <p>
                  Embarking on this project has been both meaningful and
                  challenging. Our team's collective goal was to develop a
                  solution that would make a tangible impact on Starting Over
                  Inc. and one that supports and elevates the incredible work
                  carried out by this organization.
                </p>
              </div>
              <LazyLoadImage
                src={soi_Img16}
                placeholderSrc={soi_Img16LQIP}
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
        key="starting-over-inc"
        prevText="01 Echo"
        nextText="03 Envision"
        prevLink="/work/echo"
        nextLink="/work/envision"
      />
      <Footer />
    </>
  );
}
