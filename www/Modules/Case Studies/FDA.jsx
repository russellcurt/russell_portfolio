// styles:
import "./CaseStudy.css";
import "./Content Components/NavWindow.css";
import "react-lazy-load-image-component/src/effects/blur.css";

// imported images:
import fdaImg1 from "./Assets/fda-assets/FDA Image 1.png";
import fdaImg1LQIP from "./Assets/fda-assets/FDA Image 1 lqip.png";
import fdaImg2 from "./Assets/fda-assets/FDA Image 2.png";
import fdaImg2LQIP from "./Assets/fda-assets/FDA Image 2 lqip.png";
import fdaImg3 from "./Assets/fda-assets/FDA Image 3.png";
import fdaImg3LQIP from "./Assets/fda-assets/FDA Image 3 lqip.png";
import fdaImg4 from "./Assets/fda-assets/FDA Image 4.png";
import fdaImg4LQIP from "./Assets/fda-assets/FDA Image 4 lqip.png";
import fdaImg5 from "./Assets/fda-assets/FDA Image 5.png";
import fdaImg5LQIP from "./Assets/fda-assets/FDA Image 5 lqip.png";
import fdaImg6 from "./Assets/fda-assets/FDA Image 6.png";
import fdaImg6LQIP from "./Assets/fda-assets/FDA Image 6 lqip.png";
import fdaImg7 from "./Assets/fda-assets/FDA Image 7.png";
import fdaImg7LQIP from "./Assets/fda-assets/FDA Image 7 lqip.png";
import fdaImg8 from "./Assets/fda-assets/FDA Image 8.png";
import fdaImg8LQIP from "./Assets/fda-assets/FDA Image 8 lqip.png";
import fdaImg9 from "./Assets/fda-assets/FDA Image 9.png";
import fdaImg9LQIP from "./Assets/fda-assets/FDA Image 9 lqip.png";
import fdaImg10 from "./Assets/fda-assets/FDA Image 10.png";
import fdaImg10LQIP from "./Assets/fda-assets/FDA Image 10 lqip.png";
import fdaImg11 from "./Assets/fda-assets/FDA Image 11.png";
import fdaImg11LQIP from "./Assets/fda-assets/FDA Image 11 lqip.png";
import fdaImg12 from "./Assets/fda-assets/FDA Image 12.png";
import fdaImg12LQIP from "./Assets/fda-assets/FDA Image 12 lqip.png";
import fdaImg13 from "./Assets/fda-assets/FDA Image 13.png";
import fdaImg13LQIP from "./Assets/fda-assets/FDA Image 13 lqip.png";
import fdaImg14 from "./Assets/fda-assets/FDA Image 14.png";
import fdaImg14LQIP from "./Assets/fda-assets/FDA Image 14 lqip.png";
import fdaImg15 from "./Assets/fda-assets/FDA Image 15.png";
import fdaImg15LQIP from "./Assets/fda-assets/FDA Image 15 lqip.png";
import fdaImg16 from "./Assets/fda-assets/FDA Image 16.png";
import fdaImg16LQIP from "./Assets/fda-assets/FDA Image 16 lqip.png";
import fdaImg17 from "./Assets/fda-assets/FDA Image 17.png";
import fdaImg17LQIP from "./Assets/fda-assets/FDA Image 17 lqip.png";
import fdaIdeateChart from "./Assets/fda-assets/fda-ideate-chart.png";
import fdaIdeateChartLQIP from "./Assets/fda-assets/fda-ideate-chart-lqip.png";
import fdaDesignChart from "./Assets/fda-assets/fda-design-chart.png";
import fdaDesignChartLQIP from "./Assets/fda-assets/fda-design-chart-lqip.png";

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

export default function FDA() {
  const [activeSection, setActiveSection] = useState("");
  const [isTop, setIsTop] = useState(true);

  // object with key value pairs used to set custom section threshold values (can always change it to whatever depending on section content)
  const sectionThresholds = {
    overview: [0.025, 1],
    empathize: [0.25, 1],
    define: [0.25, 1],
    ideate: [0.1],
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
    if (window.scrollY < 550) {
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
              title="FDA"
              img={fdaImg1}
              lqip={fdaImg1LQIP}
              text="A live captioning mobile app designed for accessibility and inclusivity."
            />
          </div>

          <div ref={overviewRef} id="overview">
            <CSDWindowTitles stepNumber="00" stepName="Overview" />
            <div className="fda-overview-content">
              <div className="fda-overview-spacing fda-overview-top-container">
                <div className="fda-overview-top-left-container">
                  <div className="csd-titles">Summary</div>
                  <p>
                    A website redesign project for UC Berkeley UX/UI Boot Camp.
                    <br />
                    <br />
                    For this project we were given a government agency to
                    redesign and update it's website. The agency that was
                    assigned to my team was the U.S. Food and Drug
                    Administration.
                    <br />
                    <br />
                    The FDA is a federal agency of the Department of Health and
                    Human Services. They protect the public health by ensuring
                    the safety of drugs, medical devices, and food supply. It
                    regulates tobacco products, advances medical innovations,
                    and supports the nation's counterterrorism efforts.
                    <br />
                    <br />
                    With this project, my team aimed to enhance usability,
                    especially in providing crucial information that the FDA
                    releases such as recalls, warnings, and announcements, for
                    users and the public to stay informed and engaged.
                  </p>
                </div>
                <div className="fda-overview-top-right-container">
                  <div className="csd-titles">Timelines</div>
                  <p>5 weeks, February - March 2023</p>
                  <br />
                  <div className="csd-titles">My Role</div>
                  <p>
                    UX + UI Design, Research, Prototyping, Interaction Design,
                    Usability Testing
                  </p>
                  <br />
                  <div className="csd-titles">Tools</div>
                  <p>Figma, Miro, Trello</p>
                </div>
              </div>
              <div className="fda-overview-spacing fda-overview-btn-container">
                <CSLinkButton
                  buttonText="View Full Case Study"
                  linkOut="https://docs.google.com/presentation/d/1ITYB2Kx_Uwz06ICSpBXq7vMAOQrIOhgi0hN604569eM/edit#slide=id.p"
                />
                <CSLinkButton
                  buttonText="View Prototype"
                  linkOut="https://www.figma.com/file/wFrdYkL78Qi6jdfhPGdWRh/FDA-Redesign-Prototypes?type=design&node-id=1131%3A12658&mode=design&t=jRcWcnaSMLkWS8DZ-1"
                />
              </div>
              <LazyLoadImage
                src={fdaImg2}
                placeholderSrc={fdaImg2LQIP}
                wrapperClassName="LLI-stylings"
                effect="blur"
              />
            </div>
          </div>

          <div ref={empathizeRef} id="empathize">
            <CSDWindowTitles stepNumber="01" stepName="Empathize" />
            <div className="fda-empathize-content">
              <div className="fda-empathize-spacing">
                <div className="csd-titles">Research Approach</div>
                <p>
                  Our research approach had two main objectives. First, we
                  conducted an in-depth analysis and usability testing of the
                  current FDA website to identify areas that require
                  improvement. Second, we sought inspiration from other sources
                  to explore potential solutions for refining the identified
                  deficiencies.
                  <br />
                  <br />
                  To assess the website's usability, we designed four tasks,
                  challenging participants to navigate and locate specific
                  pages, such as the Animal and Veterinary Recall Info page, the
                  Visitor Info page, Drug Approvals and Databases page, and the
                  FDA Facebook page.
                  <br />
                  <br />
                  We engaged 5 participants in our research to test the
                  usability of the FDA website. This group of participants
                  allowed us to gain valuable insights into both complex and
                  straightforward navigation scenarios.
                </p>
              </div>
              <div className="fda-empathize-spacing">
                <div className="csd-titles">Usability Testing</div>
                <p>
                  During our usability testing phase, we conducted 5 virtual
                  one-on-one sessions with participants, assigning them specific
                  tasks to evaluate the website's user-friendliness. <br />
                  <br />
                  From these initial tests, we discovered several valuable
                  insights:
                </p>
                <ol>
                  <li>
                    Too Many Hyperlinks: The abundance of hyperlinks made all
                    text look equally unimportant, leading to potential user
                    confusion.
                  </li>
                  <li>
                    Ineffective Layout: Articles were displayed "above the
                    fold," overshadowing crucial website information, which we
                    felt should have been more prominent.
                  </li>
                  <li>
                    Disadvantageous Placement: Important information was buried
                    at the bottom of pages, often in small text, and some pages
                    were only accessible through these bottom links.
                  </li>
                  <li>
                    Unnoticed Section: The "In this section" feature blended
                    with the page, causing users to overlook it and miss out on
                    its utility.
                  </li>
                  <li>
                    Confusing Navigation: Two navigation sections, excluding the
                    menus, created confusion for users, offering too many
                    starting points for their browsing journey.
                  </li>
                  <li>
                    Inconsistent Navigation: Navigation throughout the website
                    lacked uniformity, making it challenging for users to
                    predict how to access information.
                  </li>
                </ol>
              </div>
              <div className="fda-empathize-spacing">
                <div className="csd-titles">Design Opportunities</div>
                <p>
                  Our usability testing process revealed significant design
                  opportunities that can significantly improve the FDA's
                  website. These opportunities include:
                </p>
                <br />
                <ol>
                  <li>
                    Streamlining Navigation: Simplify and consolidate the
                    navigation system to reduce confusion and provide users with
                    a clear path to essential information.
                  </li>
                  <li>
                    Organizing Hyperlinks: Strategically manage hyperlinks to
                    avoid overwhelming users and ensure that important content
                    stands out effectively.
                  </li>
                  <li>
                    Optimizing Information Placement: Reconsider the placement
                    of critical information to ensure it is easily accessible
                    and prominent, while avoiding clutter in less relevant
                    sections.
                  </li>
                  <li>
                    Enhancing "In This Section" Feature: Improve the visibility
                    and design of the "In This Section" feature, enabling users
                    to utilize it seamlessly for efficient content navigation.
                  </li>
                </ol>
                <br />
                <p>
                  By addressing these design opportunities, we aim to enhance
                  the website's usability and provide a more efficient and
                  user-friendly experience for all visitors to the FDA's
                  website.
                </p>
              </div>
              <div>
                <div className="csd-titles">User Statement</div>
                <p>
                  For users seeking information from the FDA's website, the
                  current design presents obstacles with complex navigation,
                  excessive hyperlinks, and misplaced information. They desire
                  an intuitive and user-friendly platform to easily find
                  relevant content without feeling overwhelmed. Simplifying
                  navigation and enhancing information organization will improve
                  the user experience and foster positive interactions.
                </p>
              </div>
            </div>
          </div>

          <div ref={defineRef} id="define">
            <CSDWindowTitles stepNumber="02" stepName="Define" />
            <div className="fda-define-content">
              <div className="fda-define-spacing">
                <div className="csd-titles">Problem Statement</div>
                <p>
                  The FDA's current website suffers from usability issues,
                  including a confusing navigation system, overwhelming
                  hyperlinks, and poorly organized information. Users find it
                  challenging to access essential content, leading to
                  frustration and a suboptimal user experience. Improving the
                  website's design is crucial to providing users with efficient
                  access to critical information and ensuring a seamless
                  browsing experience.
                </p>
              </div>
              <div className="fda-define-spacing">
                <div className="csd-titles">Proto-Persona</div>
                <p>
                  Before we dove into the FDA's work, it was important to
                  understand its unique context. Unlike regular products, the
                  FDA is responsible for more than just consumers. It involves
                  many different groups, all focused on keeping the public
                  healthy. Among these connections, many individuals and groups
                  are linked to the FDA's actions.
                  <br />
                  <br />
                  As we created our proto-persona, we focused on a crucial
                  aspect: how the FDA connects with the general public,
                  especially patients. This helps us see the extent to which
                  people depend on the FDA to ensure their safety and the
                  effectiveness of what they use. By studying these
                  proto-personas, we learn about how the FDA works to keep
                  everyone healthy.
                </p>
              </div>
              <div className="fda-define-spacing">
                <LazyLoadImage
                  src={fdaImg3}
                  placeholderSrc={fdaImg3LQIP}
                  wrapperClassName="LLI-stylings"
                  effect="blur"
                />
              </div>
              <div className="csd-titles">Improvements</div>
              <p>
                After conducting a heuristic evaluation of the FDA's website, we
                identified several key areas that require improvement to enhance
                the user experience:
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
              </ol>
            </div>
          </div>

          <div ref={ideateRef} id="ideate">
            <CSDWindowTitles stepNumber="03" stepName="Ideate" />
            <div className="fda-ideate-content">
              <div className="fda-ideate-spacing">
                <div className="csd-titles">Gain Confidence</div>
                <p>
                  Upon compiling our research findings, my team took part in a
                  collaborative brainstorming session to reimagine enhancements
                  for the website overhaul. Our main goal centered on improving
                  the website's usability.
                  <br />
                  <br />
                  We focused on restructuring the content to make it not only
                  useful but also easily accessible. The key was to provide
                  functional and valuable content that enables users to take
                  action effortlessly.
                  <br />
                  <br />
                  To start off, we used a low-fi prototype to address the
                  foundational issues on the current site. By standardizing
                  spacing, margins, and text sizing and grouping elements
                  cohesively, we established a visually appealing format that
                  enhances information discovery, readability, and user
                  interactions. The result was a visually appealing format that
                  significantly enhances information discovery, readability, and
                  overall user interactions.
                </p>
              </div>
              <div className="fda-ideate-spacing">
                <div className="csd-titles">Our Goals</div>
                <p>
                  How might we redesign the FDA's website to streamline
                  navigation, reduce overwhelming hyperlinks, and enhance
                  information organization, providing users with an intuitive
                  and user-friendly platform to access relevant content
                  effectively?
                </p>
              </div>
              <div className="fda-ideate-spacing">
                <LazyLoadImage
                  src={fdaImg4}
                  placeholderSrc={fdaImg4LQIP}
                  wrapperClassName="LLI-stylings"
                  effect="blur"
                />
              </div>
              <div className="fda-ideate-spacing">
                <div className="csd-titles">Low-Fidelity Prototype Testing</div>
                <p>
                  We conducted a usability test for the low-fidelity prototype
                  with five participants to refine our design and improve
                  content discovery and engagement with FDA's audience. This
                  testing phase played a crucial role, providing valuable
                  insights for identifying areas of improvement.
                  <br />
                  <br />
                  From this testing, we gained feedback on the effectiveness of
                  our design, highlighting both successful aspects and
                  opportunities for enhancement. Particularly, we recognized the
                  need to further reorganize the website to increase
                  accessibility and improve navigation to important content.
                  <br />
                  <br />
                  While the majority of participants navigated the testing
                  successfully, we continued to explore ways to optimize the
                  user experience and achieve our design goals.
                </p>
              </div>
              <div className="fda-ideate-img-tray">
                <LazyLoadImage
                  src={fdaImg5}
                  placeholderSrc={fdaImg5LQIP}
                  wrapperClassName="LLI-stylings"
                  effect="blur"
                />
                <LazyLoadImage
                  src={fdaIdeateChart}
                  placeholderSrc={fdaIdeateChartLQIP}
                  wrapperClassName="LLI-stylings"
                  effect="blur"
                />
              </div>
            </div>
          </div>

          <div ref={designRef} id="design">
            <CSDWindowTitles stepNumber="04" stepName="Design" />
            <div className="fda-design-content">
              <div className="fda-design-spacing">
                <LazyLoadImage
                  src={fdaImg6}
                  placeholderSrc={fdaImg6LQIP}
                  wrapperClassName="LLI-stylings"
                  effect="blur"
                />
              </div>
              <div className="fda-design-spacing">
                <div className="csd-titles">High Fidelity Prototype</div>
                <p>
                  Gathering insights from the low-fidelity usability tests, we
                  honed our design, pinpointing specific areas for improvement.
                  The feedback obtained during these tests informed our
                  decision-making throughout the high-fidelity prototype
                  development.
                </p>
              </div>
              <div className="fda-design-spacing fda-design-img-tray">
                <LazyLoadImage
                  src={fdaImg7}
                  placeholderSrc={fdaImg7LQIP}
                  wrapperClassName="LLI-stylings"
                  effect="blur"
                />
                <LazyLoadImage
                  src={fdaImg8}
                  placeholderSrc={fdaImg8LQIP}
                  wrapperClassName="LLI-stylings"
                  effect="blur"
                />
                <LazyLoadImage
                  src={fdaImg9}
                  placeholderSrc={fdaImg9LQIP}
                  wrapperClassName="LLI-stylings"
                  effect="blur"
                />
                <LazyLoadImage
                  src={fdaImg10}
                  placeholderSrc={fdaImg10LQIP}
                  wrapperClassName="LLI-stylings"
                  effect="blur"
                />
                <LazyLoadImage
                  src={fdaImg11}
                  placeholderSrc={fdaImg11LQIP}
                  wrapperClassName="LLI-stylings"
                  effect="blur"
                />
                <LazyLoadImage
                  src={fdaImg12}
                  placeholderSrc={fdaImg12LQIP}
                  wrapperClassName="LLI-stylings"
                  effect="blur"
                />
                <LazyLoadImage
                  src={fdaImg13}
                  placeholderSrc={fdaImg13LQIP}
                  wrapperClassName="LLI-stylings"
                  effect="blur"
                />
                <LazyLoadImage
                  src={fdaImg14}
                  placeholderSrc={fdaImg14LQIP}
                  wrapperClassName="LLI-stylings"
                  effect="blur"
                />
                <LazyLoadImage
                  src={fdaImg15}
                  placeholderSrc={fdaImg15LQIP}
                  wrapperClassName="LLI-stylings"
                  effect="blur"
                />
                <LazyLoadImage
                  src={fdaDesignChart}
                  placeholderSrc={fdaDesignChartLQIP}
                  wrapperClassName="LLI-stylings"
                  effect="blur"
                />
                <LazyLoadImage
                  src={fdaImg16}
                  placeholderSrc={fdaImg16LQIP}
                  wrapperClassName="LLI-stylings"
                  effect="blur"
                />
              </div>
              <div className="fda-design-spacing fda-design-btn-container">
                <CSLinkButton
                  buttonText="View Prototype"
                  linkOut="https://www.figma.com/file/wFrdYkL78Qi6jdfhPGdWRh/FDA-Redesign-Prototypes?type=design&node-id=1131%3A12658&mode=design&t=jRcWcnaSMLkWS8DZ-1"
                />
              </div>
              <div className="fda-design-spacing">
                <div className="csd-titles">Next Steps</div>
                <p>
                  Having gained valuable experience from completing this
                  project, I would like to revisit this redesign with my
                  newfound knowledge and expertise and continue to refine the
                  overall experience and look of this redesign.
                </p>
              </div>
              <div className="fda-design-spacing">
                <div className="csd-titles">Reflections & Take-aways</div>
                <p>
                  This was my third project for UC Berkeley UX/UI Design
                  Bootcamp. This redesign was a challenge due to the information
                  heavy and extremely complex nature of the FDA's website. We
                  found success by keeping the user in mind through every step
                  of the design process.
                </p>
              </div>
              <LazyLoadImage
                src={fdaImg17}
                placeholderSrc={fdaImg17LQIP}
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
        key="fda"
        prevText="04 Hatch"
        nextText="WORK"
        prevLink="/work/hatch"
        nextLink="/work/"
      />
      <Footer />
    </>
  );
}
